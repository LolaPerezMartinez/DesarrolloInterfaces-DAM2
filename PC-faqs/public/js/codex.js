const faqs =[{
    'pregunta': 'Quien mató a kenedy.',
    'respuesta': 'Nadie lo sabe.'
},
{
    'pregunta': 'De qué color es el caballo blanco de Santiago.',
    'respuesta': 'Eso es una de las grandes incógnitas de la humanidad.'
}

];

faqs.map((faq, index) => {
    console.log(faq.pregunta);
});

class Acordeon{
    constructor({contenedor='#acordeon'}= {}){
        this.contenedor = contenedor;
        this.render();
    }

    render(){
        
        faqs.map((faq, index) => {
            //console.log(faq.pregunta);
            const pregunta = document.createElement('h2');
            const respuesta = document.createElement('h3');

            pregunta.innerText = faq.pregunta;
            respuesta.innerText = faq.respuesta;

            const contenedor = document.querySelector(this.contenedor);
            contenedor.append(pregunta, respuesta);
        });

    }
}

const acordeon1 = new Acordeon();