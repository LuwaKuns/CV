const typed = new Typed('.typed', {
    strings: [
        '<i class="forlive">NLP Analyst</i>',
        '<i class="forlive">UX Writter</i>',
        '<i class="forlive">Data Analyst</i>',
        '<i class="forlive">Service Design</i>', 
    ],

   // stringsElement: 'cadenas-texto',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    //smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar:'/',
    contentType: 'html',
})


/*
stringsElement: 'cadenas-texto',    ID del elemento que contien cadenas de textos a mostrar
typeSpeed: 75,            Velocidad en milisegundos para poner una letra
startDelay: 300,          Tiempo de retraso en iniciar la animación. Aplica también cuando termina y vuelve a iniciar
backSpeed: 75,            Velocidad en milisegundos para borrar una letra
smartBackspace: true,     Eliminar solamente las palabras que sean nuevas en una cadena texto
shuffle: false,           Alterar el orden el que se escribe las palabras
backDelay: 1500,          Tiempo de espera después de que termina de escribir una palabra
loop: true,               Repetir el array de strings
loopCount: false,         Cantidad de veces por retir el array
showCursor: true,         Mostrar cursor palpitando
cursorChar:'/',           Carácter para el cursor
contentType: 'html',      html o null para texto sin formato

*/

/*
metodo 1

en html pon:
<div class="contenedor-texto col-sm-12 text-center col-md-6">
    <h2 class="titulo pb-2">¡Hola! Me llamo <strong>Celeste</strong></h2>
    <h4 class="pb-4">¿Sabes a qué me dedico?</h4>
    <h1>Yo soy <span class="typed"></span></h1>
    </br>
    </br>
    <a href="#proyectos" class="btn rounded-pill px-2 mx-2">Conoce mis proyectos</a>
    <a href="#contacto" class="btn btn-outline-success rounded-pill px-2 mx-2">Dialoguemos</a>
</div>

en js:
const typed = new Typed('.typed', {
    strings: [
        '<i class="forlive">NLP Analyts</i>',
        '<i class="forlive">UX Writter</i>',
        '<i class="forlive">Data Analyts</i>',
        '<i class="forlive">Service Design</i>', 
    ],

   // stringsElement: 'cadenas-texto',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    //smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar:'/',
    contentType: 'html',
})

método 2:   Es mejor y más amigable para SEO, al indexarlos al buscador

en html pon:
<div class="contenedor-texto col-sm-12 text-center col-md-6">
    <h2 class="titulo pb-2">¡Hola! Me llamo <strong>Celeste</strong></h2>
    <h4 class="pb-4">¿Sabes a qué me dedico?</h4>
    <h1><span class="typed"></span></h1>

    <div class="titulo" id="cadenas-texto">
        <p>Yo soy <i class="forlive">Ux writer</p>
        <p>Yo soy <i class="forlive">NLP Analyts</p>
        <p>Yo soy <i class="forlive">Service Design</p>
    </div>


    </br>
    </br>

    <a href="#proyectos" class="btn rounded-pill px-2 mx-2">Conoce mis proyectos</a>
    <a href="#contacto" class="btn btn-outline-success rounded-pill px-2 mx-2">Dialoguemos</a>
</div>

en js:
const typed = new Typed('.typed', {
    stringsElement: '#cadenas-texto',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar:'/',
    contentType: 'html',
});

*/
