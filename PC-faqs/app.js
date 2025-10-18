const express = require('express');
const app = express();
const port = 3000;


// Configuramos Pug
//Aqui decimos que la carpeta de pug se encuentra los views
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static("public"));

// Ruta principal
//esto tiene que coincidir con la carpeta pug
app.get('/', (req, res) => {
  res.render('index', { pagina: "Inicio" });
});


// Arrancamos servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
