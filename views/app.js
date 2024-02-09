const apiUrl = 'http://localhost:1234/movies/'

/* Necesitamos un elemento para mostrar los datos de la pagina web
 Es la etiqueta main que creamos */

const main = document.querySelector('main')


fetch(apiUrl).then(respuesta => {

  if (!respuesta.ok) throw new Error(`Error en la rta: ${respuesta.status}`)

  return respuesta.json()

}).then(movies => {


  console.log(movies)

  // Realizar un foreach para iterar por cada pelicula
  movies.forEach(movie => {


    // Cada uno de los elementos va a tener un div
    const movieElement = document.createElement('div');

    // Le agregamos la clase de movie a cada div
    movieElement.classList.add('movie');

    // Luego aca vamos a hacer un innerHTML a cada div que creamos para insertar html con los datos
    movieElement.innerHTML = `
    <img src="${movie.poster}">
    <h1>${movie.title}</h1>

    <ul>
    <li><h3>Year: ${movie.year}</h3></li>
    <li><h3>Director: ${movie.director}</h3></li>
    <li><h3>Duration: ${(movie.duration/60).toFixed(1)} hours</h3></li>
    <li><h3>Genre: ${movie.genre}</h3></li>
    <li><h3>Rating: ${movie.rate}\n</h3></li>
    </ul>

  `;

    // Por ultimo los agregamos al main
    main.appendChild(movieElement)

  });


}).catch(errorr => {
  console.error(`Error en solicitud: ${errorr}`)
})




