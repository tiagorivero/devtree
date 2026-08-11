import User from "../models/Users"
import type { Request, Response } from 'express'

export const createAccount = async (req : Request, res: Response) => {
    const { email } = req.body

    const userExists = await User.findOne({ email })
    if(userExists){
        const error = new Error('El Usuario ya esta registrado')
        return res.status(409).json({error: error.message})
    }

    const user = new User(req.body)

    await user.save()

    res.send({msg: 'Registro Creado Correctamente'})
}