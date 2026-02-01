//const { createElement } = require("react");

const raiz = document.getElementById('root');

async function cargarRios() {

    try{

        const respuesta = await fetch('http://172.22.0.1:8087/api/index.php');
    
        //hemos cogido los datos con respuesta y ahora los necesitamos en json
        const datos = await respuesta.json();
        
        //Mostramos datos en 'root
        //listado con todos los nombres de los rios dentro de root
         raiz.innerText = '';
         const lista = document.createElement('ul');
         lista.setAttribute('id', 'rios');

         datos.forEach(rio => {
            const item = document.createElement('li');
            //Creamos un atributo data-id en li con el id-rio
            item.setAttribute('data-id', rio.id_rio);
            item.innerText = rio.nombre_rio;

           
            item.addEventListener('click', function(){
                seccion.innerText = '';
                const parrafo = document.createElement('p');
                parrafo.innerText = `El rio ${rio.nombre_rio} transcurre por ${rio.paises_rio.length > 1 ? 'los países' : 'el país '} ${rio.paises_rio.join(', ')}.`
                seccion.append(parrafo);
            })

            lista.append(item);
         });

        
        //asi podemos ver los datos de los rios en consola con json
        console.log(datos);
         
       const seccion = document.createElement('section');
       lista.setAttribute('id', 'salida');
       seccion.innerHTML = 'Pulsa sobre un río para ampliar la información'
       raiz.append(lista, seccion);
       

    }catch(error){
        raiz.innerText = '';
        const parrafo1 = document.createElement('p');
        parrafo1.innerText = error;
        parrafo1.classList.add('error');

        const parrafo2 = document.createElement('p');
        parrafo2.innerText += 'Algo ha fallado, prueba a cargar';
        parrafo2.classList.add('error');

        raiz.append(parrafo1, parrafo2);

    }
}

cargarRios();