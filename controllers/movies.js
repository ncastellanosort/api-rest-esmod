import { MovieModel } from "../models/movie.js"
import { validate } from "../schemas/schema.js"

// La idea es encapsular el codigo para que desde el controlador se encargue de la logica

export class MovieController {

  static async getByYearController(req, res) {
    const { year } = req.params
    const movie = await MovieModel.getByYearModel({ year })
    return res.json(movie)
  }

  static async getByDirectorController(req, res) {
    const { director } = req.params
    const movieDirector = await MovieModel.getByDirectorModel(director)
    return res.json(movieDirector)
  }

  static async getByGenreController(req, res) {
    const { genre } = req.query
    const movie = await MovieModel.getByGenreModel(genre)
    return res.json(movie)
  }

  static async postMovieController(req, res) {
    const result = validate(req.body)
    if (result.error) return res.status(400).json({ message: JSON.parse(result.error.message) })
    const newMovie = await MovieModel.postMovieModel(result.data)
    return res.status(201).json(newMovie)
  }

  static async patchMovieController(req, res) {
    const result = validateNoOptional(req.body)
    if (result.error) return res.status(400).json({ message: JSON.parse(result.error.message) })
    const { id } = req.params
    const updatedMovie = MovieModel.patchMovieModel({ id, input: result.data })
    return res.json({ message: 'movie actualizada', data: updatedMovie })
  }

  static async deleteMovieController(req, res) {
    const { id } = req.params
    const result = await MovieModel.deleteMovieModel({ id })
    if (result) return res.json({ message: 'movie deleted' })
  }
}