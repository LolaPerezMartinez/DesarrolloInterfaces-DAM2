class Tooltip{
    constructor({fondo='black', texto='white'}){
        this.fondo = fondo;
        this.texto = texto;
        //llamamos a render() dentro del constructor porque los elementos .iconos ya existen dentro del html
        this.render();
    }
    
    render(){
        const iconos = document.getElementsByClassName('icono');
        //el div es el tooltip que se mostrará
        const etiqueta = document.createElement('div');
        
        for(let icono of iconos){
            icono.addEventListener('mouseover', () =>{
                etiqueta.innerText = icono.dataset.titulo;
                icono.style.position = "relative";
                //la absoluta siempre tiene que estar repecto a cualquier otra posicion
                //mientras que esta no sea static
                etiqueta.style.position = "absolute";
                etiqueta.style.top= "100%"; // debajo del icono
                etiqueta.style.background = this.fondo;
                etiqueta.style.color = this.texto;
                etiqueta.style.borderRadius = "10px";
                etiqueta.style.padding = '10px';
                etiqueta.style.whiteSpace = "nowrap";
                etiqueta.style.zIndex = "1000";
                //etiqueta se convierte en hijo de icono y se mete dentro
                icono.append(etiqueta);
            })

            icono.addEventListener('mouseout', function(){
                etiqueta.remove();
            })
        }
    }
}
const t1 = new Tooltip({fondo: "grey"});