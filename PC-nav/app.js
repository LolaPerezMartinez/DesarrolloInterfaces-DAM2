//con esto creamos una app web con node.js
const express = require("express")
const app = express();

//Establecemos pug como motor de plantillas
//asi le decimos que cuando llame a res.render debe buscar en archivos pug
app.set("view engine", "pug");
//si pusieramos una línea asi app.set("views", "./carpeta"); le estaríamos diciendo que busque las
//views en una carpeta llamada ./carpeta y no views

//es importante que esta línea se encuentre antes de las rutas 
//o no las encontrará
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { pagina: "Inicio" });
});

app.get("/productos", (req, res) => {
  res.render("productos", { pagina: "Productos" });
});

app.get("/contacto", (req, res) => {
  res.render("contacto", { pagina: "Contacto" });
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});