Para crear una ventana modal debes hacer lo siguiente:

Seleccionar elementos
Se busca el modal y el botón de cerrar usando getElementById.

Abrir al cargar
Con window.addEventListener('load', ...) se muestra el modal automáticamente cuando la página termina de cargarse.

Cerrar con la X
Al hacer clic en el botón con id cerrar, se cambia el estilo display a none, ocultando el modal.

Cerrar haciendo clic fuera
Si el usuario hace clic en el fondo oscuro (fuera del modal), también se cierra.

Los estilos lo he añadido en un css aparte.