const f1 = new Formulario({
    accion : 'gestionar.php'
});

f1.agregarCampos({nombre: 'Nombre', tipo: 'text', etiqueta: 'Nombre '});
f1.agregarCampos({nombre: 'Apellido', etiqueta: 'Apellidos'});
f1.agregarAreas({nombre: 'Deseos', etiqueta: 'Escribe lo que te gusta'});
f1.agregarAreas({nombre: 'Sugerencia', etiqueta: 'Deja tu sugerencia'});
f1.render();