const express = require("express")
const app = express();

app.set("view engine", "pug");
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