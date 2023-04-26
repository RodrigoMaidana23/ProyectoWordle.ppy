let intentos = 6;
let palabra = "APPLE"

const BOTON = document.getElementById('guess-button');
BOTON.addEventListener('click',intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
     const GRID = document.getElementById("grid");
     const ROW = document.createElement('div');
     ROW.className = 'row';
     for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        SPAN.innerHTML = INTENTO[i];
        if (INTENTO[i]===palabra[i]){
             //VERDE
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) {
             //AMARILLO
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.style.backgroundColor = 'grey';
        }
    }
    intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")}
            
    }
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

    


