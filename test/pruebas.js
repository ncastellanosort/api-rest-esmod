const movies = require('../movies.json')


const director2 = "Christopher Nolan"


const directArreglado = director2.toLowerCase().replace(/\s/g, '')


const movieDirector = movies.find(movie => movie.director.toLowerCase().replace(/\s/g, '') === directArreglado)

// Director del json
if(movieDirector){
  console.log(movieDirector.director)
}else{
  console.log('no')
}

const genres =['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']

const lowerGenres = genres.map(genre => genre.toLowerCase())

console.log(lowerGenres)
