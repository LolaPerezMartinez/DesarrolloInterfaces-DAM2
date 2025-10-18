class Formulario{
    //con {accion, method} estamos metiendo un objeto como parámetro
    constructor({accion, metodo= "GET", boton= "Enviar"}){
        this.accion = accion;
        this.metodo = metodo;
        this.boton = boton;
        this.campos = [];
        this.areas = [];
    }

    agregarCampos({nombre, tipo = "text", etiqueta}){
        //Aqui añadimos parámetros al objeto
        this.campos.push({nombre, tipo, etiqueta});
    }

    agregarAreas({nombre, etiqueta}){
        this.areas.push({nombre, etiqueta});
    }
    render(){
    //
    const form = document.createElement('form');
   // form.setAttribute('accion', this.accion);
    form.action = this.accion;
    form.method = this.metodo;
    const boton = document.createElement('button');
    boton.classList.add('btn');
    boton.innerText = this.boton;
    
    

    
    this.campos.forEach(({etiqueta, tipo, nombre}) =>{
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.innerText = etiqueta;
        input.name = nombre;
        input.type = tipo;

        label.append(input);
        form.append(label);

    });

    this.areas.forEach(({etiqueta, nombre}) =>{
        const label = document.createElement('label');
        label.innerText = etiqueta;
        const textarea = document.createElement('textarea');
        textarea.name = nombre;
        label.append(textarea);
        form.append(label);
      
        

    });

   
    //Tenemos que poner el boton debajo de los campos pero antes de que termine form para que se añada al form
 
    form.append(boton);
    document.body.append(form);
    
}
}

