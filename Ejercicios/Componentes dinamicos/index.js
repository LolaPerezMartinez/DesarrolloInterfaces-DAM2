const express = require("express")
const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("inicio", { pagina: "Inicio" });
});

app.get("/boton-personalizado", (req, res) => {
  res.render("boton-personalizado", { pagina: "Boton" });
});

app.get("/ventana-emergente", (req, res) => {
  res.render("ventana-emergente", { pagina: "Ventana" });
});

app.get("/tooltip", (req, res) => {
  res.render("tooltip", { pagina: "Tooltip" });
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});