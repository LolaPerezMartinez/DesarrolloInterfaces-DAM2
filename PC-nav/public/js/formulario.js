class Formulario{
    //con {accion, method} estamos metiendo un objeto como parámetro
    //metodo= "GET" esto crea un valor por defecto en el caso de que no se asigne
    //un valor a método
    constructor({accion, metodo= "GET", boton= "Enviar"}){
        this.accion = accion;
        this.metodo = metodo;
        this.boton = boton;
        this.campos = [];
        this.areas = [];
        //si llamaramos a render() aqui los objetos se crearían vacios
        //deben llamarse debajo de la creación de objetos
    }
    

    agregarCampos({nombre, tipo = "text", etiqueta}){
        //Haciendo {nombre, tipo, etiqueta} estamos creando un objeto y esas son sus propiedades
        this.campos.push({nombre, tipo, etiqueta});
    }

    agregarAreas({nombre, etiqueta}){
        this.areas.push({nombre, etiqueta});
    }
    render(){
    const form = document.createElement('form');
    const boton = document.createElement('button');

   // form.setAttribute('accion', this.accion); es lo mismo que la siguiente linea
    form.action = this.accion;
    form.method = this.metodo;

    //Añadimos la clase btn al boton
    //en el caso de que tenga otra clase la añade y no la sobreescribe
    //<button class="activo"></button>
    //boton.classList.add('btn');
    //Resultado:
    //<button class="activo btn"></button>

    boton.classList.add('btn');
    boton.innerText = this.boton;
    
    

    //Para agregar los elementos del formulario a un campo
    this.campos.forEach(({etiqueta, tipo, nombre}) =>{
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.innerText = etiqueta;
        input.name = nombre;
        //type puede ser text, email, password
        input.type = tipo;

        //añadimos el input al final de label
        label.append(input);
        //añadimos el label al final de formulario
        form.append(label);

    });

    this.areas.forEach(({etiqueta, nombre}) =>{
        const label = document.createElement('label');
        const textarea = document.createElement('textarea');

        label.innerText = etiqueta;
        textarea.name = nombre;

        label.append(textarea);
        form.append(label);
      
        

    });

   
    //Tenemos que poner el boton debajo de los campos pero antes de que termine form para que se añada al form
 
    form.append(boton);
    document.body.append(form);
    
}
}

