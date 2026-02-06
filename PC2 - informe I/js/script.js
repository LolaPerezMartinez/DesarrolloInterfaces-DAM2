let promedio = [];

async function generarInforme() {
  try {
    console.log('🔄 Cargando datos...');
    const response = await fetch('datos/calificaciones.json');
    
    if (!response.ok) {
      throw new Error('Error 404: No se encontró el archivo');
    }
    
    const { alumnado } = await response.json();
    
    console.log('✅ Datos cargados:', alumnado);

    document.getElementById("fecha").textContent = 
      `Generado el: ${new Date().toLocaleDateString('es-ES')}`;

    
    document.getElementById("tabla").innerHTML = alumnado.map(alumno => {
      const notas = Object.values(alumno.notas);
      const promedio = (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2);
      return `<tr>
                <td>${alumno.nombre}</td>
                ${notas.map(n => `<td>${n}</td>`).join('')}
                <td><strong>${promedio}</strong></td>
              </tr>`;
    }).join('');

   
    const nombresAsignaturas = Object.keys(alumnado[0].notas);
    const listaHTML = nombresAsignaturas.map(materia => {
      const suma = alumnado.reduce((acc, alu) => acc + alu.notas[materia], 0);
      const media = (suma / alumnado.length).toFixed(2);
      return `<li><strong>${materia}:</strong> ${media}</li>`;
    }).join('');

    document.getElementById("promediosAsignatura").innerHTML = listaHTML;
    
    console.log('✅ Informe generado correctamente');
    
  } catch (error) {
    console.error('❌ Error:', error);
    alert('Error al cargar los datos: ' + error.message);
  }
}


document.getElementById("generar-informe").onclick = generarInforme;
document.getElementById("guardar-pdf").onclick = () => window.print();