import Router from 'express'// <- clase que nos permite crearnos un enrutador donde vamos a responder todos los path
import { MovieController } from '../controllers/movies.js'
import { readJSON } from '../utils/json-file-manager.js'

// Debemos exportarlo ya que lo vamos a usar en otro archivo (donde esta el app.js)
export const routerMovies = Router()
const movies = readJSON('./data/movies.json')

// IMPORTANTE: no poner el recurso principal -> (/movies)
routerMovies.get('/',(req, res) => {
  res.json(movies)
})

// Le pasamos como callback el controlador 
routerMovies.get('/year/:year', MovieController.getByYearController)
routerMovies.get('/director/:director', MovieController.getByDirectorController)
routerMovies.get('/genre', MovieController.getByGenreController)
routerMovies.post('/', MovieController.postMovieController)
routerMovies.patch('/:id', MovieController.patchMovieController)
routerMovies.delete('/:id', MovieController.deleteMovieController)

