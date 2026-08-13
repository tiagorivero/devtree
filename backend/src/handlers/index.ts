import type { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from "../models/Users"
import { checkPassword, hashPassword } from "../utils/auth"
import { generateJWT } from '../utils/jwt'

export const createAccount = async (req : Request, res: Response) => {
    const { email, password } = req.body

    const userExists = await User.findOne({ email })
    if(userExists){
        const error = new Error('Un usuario con ese email ya esta registrado')
        return res.status(409).json({error: error.message})
    }

    const handle = slug(req.body.handle, '')
    const handleExists = await User.findOne({ handle })
    if(handleExists){
        const error = new Error('El Usuario ya esta registrado')
        return res.status(409).json({error: error.message})
    }

    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = handle

    await user.save()
    res.status(201).send({msg: 'Registro Creado Correctamente'})
}

export const login = async (req: Request, res: Response) => {
    //Manejo de errores
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const { email, password } = req.body

    //Revisar si el usuario esta registrado
    const user = await User.findOne({ email })
    if(!user){
        const error = new Error('El Usuario no existe')
        return res.status(404).json({error: error.message})
    }

    // Comprobar el password
    const isPasswordCorrect = await checkPassword(password, user.password )
    if(!isPasswordCorrect){
        const error = new Error('Password Incorrecto')
        return res.status(401).json({error: error.message})
    }

    const token = generateJWT({id: user._id})

    res.send(token)
}

export const getUser = async (req: Request, res: Response) => {
    res.json(req.user)
}

export const updateProfile = async (req: Request, res: Response) => {
    try{
        console.log(req.body)
    } catch (e) {
        const error = new Error('Hubo un error')
        return res.status(500).json({error: error.message})
    }
}