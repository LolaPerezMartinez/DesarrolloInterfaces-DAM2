import Chart from "chart.js/auto";

//Chart.js dibuja gráficos dentro de un canvas
//new Chart(PRIMER_PARÁMETRO -> elemento canvas en HTML, 
//          SEGUNDO_PARÁMETRO -> un objeto de configuración)
export function pintarGraficaDescargas(idContenedor, libros) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  // Limpiar para evitar duplicados al recargar
  //La etiqueta canvas debe estar vacía para luego con new chart insertar lo que queremos
  //Creamos un elemento canvas que actua como un lienzo en blanco
  contenedor.innerHTML = '<canvas id="miCanvas"></canvas>';
  const ctx = document.getElementById('miCanvas').getContext('2d');

  // FILTRADO: Top 10 libros con más descargas
  const top10 = [...libros]
    .sort((a, b) => b.total_descargas - a.total_descargas)
    .slice(0, 10);

  new Chart(ctx, {
    //type: como se dibujan los datos en este caso en barras verticales
    type: 'bar',
    data: {
    //labels pone los 10 primeros libros en el eje x
      labels: top10.map(l => l.titulo.substring(0, 12) + "..."),
      datasets: [{
        //nombre de la grafica
        label: 'Top 10 Descargas',
        //los 10 datos que vamos a obtener
        data: top10.map(l => l.total_descargas),
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      
      scales:{
        //aqui podríamos poner el maximo y el minimo que tendrá de numeros el eje y
        // y cada cuanto queremos que sea el salto, cada 5, cada 10
      }
    }
  });
}