const f1 = new Formulario({
    accion : 'gestionar.php'
});

f1.agregarCampos({nombre: 'Nombre', tipo: 'text', etiqueta: 'Nombre '});
//Esta línea da error porque no estamos asignando un objeto y en agregar campos tenemos 
// esto agregarCampos({nombre, tipo = "text", etiqueta}) y no esto {nombre, tipo = "text", etiqueta} ={}
//console.log(`Agregar campos vacio:`, f1.agregarCampos());
f1.agregarCampos({nombre: 'Apellido', etiqueta: 'Apellidos'});
f1.agregarAreas({nombre: 'Deseos', etiqueta: 'Escribe lo que te gusta'});
f1.agregarAreas({nombre: 'Sugerencia', etiqueta: 'Deja tu sugerencia'});
f1.render();