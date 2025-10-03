/*alert('Esto funciona');*/
/*const mas = document.createElement('div');
mas.setAttribute('id', 'mas');
mas.innerText = "Soy el DIV";
document.body.append(mas);*/

const texto = document.querySelector("#productos");

//Crear un div
const masInfo = document.createElement('div');
masInfo.setAttribute('id', 'masInfo');
document.body.append(masInfo);

const infoK = document.createElement("li");
infoK.innerText = "Ingredientes: tomate, azúcar, sal y vinagre, con condimentos y especias.";
masInfo.append(infoK);

const infoMo = document.createElement("li");
infoMo.innerText = "Ingredientes: semillas de mostaza molidas (en polvo o pasta), vinagre y sal";
masInfo.append(infoMo);


const productos = [
  {
    Nombre: "Ketchup",
    Precio: 2.5,
    Descripcion: "Salsa de tomate clásica, ideal para hamburguesas y patatas.",
    imagen: "/images/ketchup.webp",
  },
  {
    Nombre: "Mostaza",
    Precio: 1.8,
    Descripcion: "Mostaza suave, perfecta para perritos calientes y bocadillos.",
    imagen: "/images/heinz-mustard.webp",
  },
];


for (const producto of productos) {
  console.log(producto);
  for (let key of Object.keys(producto)) {
    console.log(`Clave: ${key}. Valor: ${producto[key]}`);

    if (key === "imagen") {
      texto.innerHTML += `<img src="${producto[key]}">`;
    } else {
      texto.innerHTML += `<li>${key}: ${producto[key]}</li>`;
    }
  }
}


