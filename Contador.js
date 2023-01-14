contador = 0;
function Incrementar(){
    contador++;
    console.log(contador);

    let divContador = document.getElementById("divContador")
    divContador.innerHTML=contador;

}

function Cero(){
    contador = 0;

    let divContador = document.getElementById("divContador")
    divContador.innerHTML=contador;

}

function Decrementar(){
    contador--;
    let divContador = document.getElementById("divContador")
    divContador.innerHTML=contador;

}