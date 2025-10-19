const peliculas = [
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    genero: "Ciencia ficción",
    precio: 9.99,
    imagen: "/img/inception.webp",
    descripcion: "Un ladrón que roba secretos del subconsciente debe cumplir una misión imposible.",
  },
  {
    titulo: "Matrix",
    director: "Lana y Lilly Wachowski",
    genero: "Acción / Ciencia ficción",
    precio: 8.5,
    imagen: "/img/matrix.webp",
    descripcion: "Un hacker descubre la verdadera naturaleza de su realidad.",
  },
];

const listaPeliculas = document.getElementById('peliculas');

//Aqui map no tendría sentido si no queremos que retorne nada
for(const pelicula of peliculas){
    listaPeliculas.innerHTML += `<li>
    <div class="pelicula" 
        data-descripcion="${pelicula.descripcion}" 
        data-director="${pelicula.director}" 
        data-genero="${pelicula.genero}">
    <figure>
        <img src=${pelicula.imagen}>
        <figcaption>
            <h1>${pelicula.titulo}</h1>
            <span class="precio">${pelicula.precio}€</span>
        </figcaption>
    </figure>
    </div>
    </li>`

}


//las peliculas una a una
const fichas = document.querySelectorAll('.pelicula');


for(const ficha of fichas){
    ficha.addEventListener('click', () =>{
        const titulo = ficha.querySelector("h1").textContent;
        const imagen = ficha.querySelector("img").src;
        //.textContent me devuelve todo lo que se encuentra en el elemento
        //por eso aqui añade el precio + € y no tenemos que volver a poner luego €
        const precio = ficha.querySelector(".precio").textContent;
        const director = ficha.dataset.director;
        const descripcion = ficha.dataset.descripcion;
        const genero = ficha.dataset.genero;
        console.log("🎬", titulo, director, genero, descripcion, precio);

        const detalle = document.createElement('section');
        detalle.id="detalle";
        detalle.innerHTML += `<div class="modal">
                            <button>❌</button>
                            <h1>${titulo}</h1>
                            <img src=${imagen}>
                            <p>${precio}</p>
                            <p>${director}</p>
                            <p>${descripcion}</p>
                            <p>${genero}
                            </div>`


        document.body.append(detalle);
        const boton = document.querySelector('button');
        
        //este evento sucede dentro del otro addevenlistener porque fuera no existe
        //el boton se crea con el primerAddEvenlistener
        boton.addEventListener('click', function () {
            detalle.remove();
        });
    });


}

