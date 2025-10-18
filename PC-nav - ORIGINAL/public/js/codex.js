const f1 = new Formulario({
    accion : 'gestionar.php'
});

f1.agregarCampos({nombre: 'Nombre', tipo: 'Texto', etiqueta: 'Prueba '});
f1.agregarAreas({nombre: 'Migle'});
f1.render();