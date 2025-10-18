class Tooltip{
    constructor({fondo='black', texto='white'}){
        this.fondo = fondo;
        this.texto = texto;
        this.render();
    }

    render(){
        const etiqueta = document.createElement('div');
        const iconos = document.getElementsByClassName('icono');

        for(let icono of iconos){
            icono.addEventListener('mouseover', function(){
                etiqueta.innerText = icono.dataset.titulo;
            })
        }
    }
}