import express from 'express'

const app = express()

//Routing
app.get('/', (req,res) => {
  res.send('<h1>Hola mundo</h1>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
  console.log('Servidor Funcionando en el puerto:', PORT)
})

