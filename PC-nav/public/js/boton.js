class Boton{
    constructor(bgcolor, color, texto){
        this.bgcolor = bgcolor || "violet";
        this.color = color || "white";
        this.texto = texto || "Boton por defecto";
        this.crearEstilos();
        this.render();
    }

    crearEstilos(){
        const estilos = document.createElement('style');
        estilos.innerText = `
        .mio{
            border:0;border-radius:20px;padding:15px;margin:5px;font-weight:bold;
        }`
        document.head.append(estilos);
    }

    render(){
        //crear un javascript
        const btn = document.createElement('button');
        btn.innerText = this.texto;
        btn.style.backgroundColor = this.bgcolor;
        btn.style.color = this.color;
        btn.classList.add('mio');
        document.body.append(btn);
    }
}

const boton1 = new Boton('green', 'yellow', 'Dale ahí');
const boton2 = new Boton();


