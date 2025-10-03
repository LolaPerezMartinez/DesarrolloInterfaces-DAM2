/*Este archivo solo sirve para que se ejecute la pantalla en el servidor */
const express = require('express');
const app = express();
const port = 3000;


// Configuramos Pug
/*set establece ejecuta la app pug para que se vean las cosas*/ 
app.set('view engine', 'pug');
app.set('views', './views');

/*cualquier elemento public es visto desde la raiz del sitio? */
app.use(express.static('public'));


// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Hola Mundo', mensaje: 'Bienvenido a Express + Pug' });
});


// Arrancamos servidor
/*listen asigna un puerto?*/ 
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
