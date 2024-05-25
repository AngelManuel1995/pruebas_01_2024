import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/api', (req: Request, res: Response) => {
  const students: { name: string }[] = [
    { name: "Angel" },
    { name: "Daniel" },
    { name: "David" },
  ]
  res.send({message: "Hello world", students})
})


app.listen(3000, () => {
  console.log("SERVIDOR CORRIENDO EN EL PUERTO 3000")
})