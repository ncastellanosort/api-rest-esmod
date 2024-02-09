import express from 'express'
import cors from 'cors'
import { routerMovies } from '../routes/movies.js' // <- El router que creamos en el otro archivo 

const app = express()
const PORT = process.env.PORT ?? 1234

app.use(express.json())
app.use(cors())

const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:8082',
  'http://localhost:8081'
]

// Sencillamente: cuando use el end-point /movies, va a usar todas las rutas que tenemos en routerMovies
app.use('/movies', routerMovies)


// Para que no haya problema de cors
app.options('/movies/:id', (req, res) => {
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin)
    // Debemos pasarle un header que indique los metodos que puede realizar
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  }
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})