class Boton{
    constructor(colorbg, color, texto){
        this.colorbg = colorbg || 'grey';
        this.color = color || 'white';
        this.texto = texto || 'Boton default';
        this.crearEstilos();
        this.render();
    }

    crearEstilos(){
        const estilos = document.createElement('style');
        estilos.innerText += `
        .mi-btn{
            padding: 15px;
            margin: 10px;
            border-radius:10px;
            font-weight:bold;
            font-size: 1rem;
            cursor:pointer;
        
        }
        `
        document.head.append(estilos);
        
    }
    render(){
        const boton = document.createElement('button');
        boton.innerText = this.texto;
        boton.style.background = this.colorbg;
        boton.style.color = this.color;
        boton.classList.add('mi-btn');
        
        //mas seguro que ponerlo en variable
        document.getElementById('contenedor').append(boton);
       

        boton.addEventListener('click', () => {
            new VentanaModal('cyan', 'white', `Has pulsado el botón "${this.texto}"`);
        });
    }

}


class VentanaModal{
    constructor(bgcolor, color, texto){
        this.bgcolor = bgcolor || 'grey';
        this.color = color || 'white';
        this.texto = texto || "Ventana default";
        this.estilosVentana();
        this.mostrarVentana();
    }

    mostrarVentana (){
        const ventana = document.createElement('div');
        ventana.innerText = this.texto;
        ventana.id = "ventana";
        
        const cruz = document.createElement('p');
        cruz.innerText = `❌`
        cruz.id = "cruz";
        ventana.append(cruz);

        ventana.style.background = this.bgcolor;
        ventana.style.color = this.color;

        
        cruz.addEventListener('click', ()=>{
            ventana.remove();
        });

        document.body.append(ventana);
    }

    estilosVentana(){
        const estilo = document.createElement('style');
        estilo.innerText = `
        div#ventana{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        width: 300px;
        min-height: 100px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        }
        p#cruz{
        background-color: black;
        color: white;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        }
        `
        document.head.append(estilo);
    }
}


class Tooltip{
    constructor({fondo='black', colorTexto="white"}){
        this.fondo= fondo;
        this.colorTexto=colorTexto;
        this.render();
        
    }
    
    estilosTool(icono, etiqueta){
        //Estilo iconos
        icono.style.position = "relative";
        icono.style.margin = "10px";
        icono.style.cursor = "pointer";

        //Estilo etiqueta
        etiqueta.style.position = "absolute";
        etiqueta.style.top= "100%"; // debajo del icono
        etiqueta.style.background = this.fondo;
        etiqueta.style.color = this.colorTexto;
        etiqueta.style.borderRadius = "10px";
        etiqueta.style.padding = '10px';
        etiqueta.style.whiteSpace = "nowrap";
        etiqueta.style.zIndex = "1000";
    }

    render(){
        const iconos = document.querySelectorAll('.icono');
        const etiqueta = document.createElement('div');
        
        for(const icono of iconos){
            this.estilosTool(icono, etiqueta);

            icono.addEventListener('mouseover', ()=>{
                etiqueta.innerText = icono.dataset.titulo;
                icono.append(etiqueta);
                
            });
            
            icono.addEventListener('mouseout', () =>{
                etiqueta.remove();
            });
            
        }
    }
}

const b1 = new Boton();
const b2 = new Boton('blue', 'white', 'Boton Personalizado');

new Tooltip({ fondo: "black", colorTexto: "white" });