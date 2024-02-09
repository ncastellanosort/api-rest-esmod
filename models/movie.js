import { readJSON } from '../utils/json-file-manager.js'
import cr from 'node:crypto'

const movies = readJSON('./data/movies.json')

// Desde el modelo encapsulamos otra vez 

export class MovieModel {
  // Metodos estaticos que necesitemos || Contrato de siempre devolver una promesa (async/await)

  static async getByYearModel({ year }) {
    const intYear = parseInt(year)
    return await movies.find(movie => movie.year === intYear);
  }

  static async getByDirectorModel(director) {
    const lowerDirector = director.toLowerCase().replace(/\s/g, '')
    return await movies.filter(movie => movie.director.toLowerCase().replace(/\s/g, '') === lowerDirector);
  }


  static async getByGenreModel(genre) {
    return await movies.filter(movie => movie.genre.includes(genre))
  }

  static async postMovieModel(input) {
    const newMovie = {
      id: cr.randomUUID(),
      ...input
    }

    movies.push(newMovie)
    return newMovie
  }

  static async patchMovieModel({id, input}) {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input
    }


    return movies[movieIndex]

  }

  static async deleteMovieModel(id) {

    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    movies.splice(movieIndex, 1)

    return true
  }

}