class VentanaModal{
    constructor(texto, bgcolor, color){
        this.texto = texto || 'Esto es una ventana modal';
        this.bgcolor = bgcolor || 'black';
        this.color = color || 'white';
        this.mostrar();
        this.crearEstilos();

    }

    crearEstilos(){
        const style = document.createElement('style');
        style.innerText = `
      .estilos {
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
      .boton {
        background-color: red;
        color: white;
        border: none;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-weight: bold;
        cursor: pointer;
      }
    `;
        document.head.append(style);
    }

    mostrar(){
        const ventana = document.createElement('div');
        ventana.innerText = this.texto;
        document.body.append(ventana);
        //con esta clase podemos crear los estilos de la ventana modal en crearEstilos()
        ventana.classList.add('estilos');

        const cruz = document.createElement('button');
        cruz.innerText = `X`;
        ventana.append(cruz);
        //añadimos a la etiqueta button llamada cruz la clase boton
        cruz.classList.add('boton');

        ventana.style.background = this.bgcolor;
        ventana.style.color = this.color;

        cruz.addEventListener('click', () =>{
            ventana.remove();
        })

        
    }


}

//const vM1 = new VentanaModal('Atención', 'violet', 'black');
const vM2 = new VentanaModal();