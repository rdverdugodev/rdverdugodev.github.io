
function descubrir(){
    var tarjetasDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    var descubiertas;
    var tarjetasPendientes;

    if(tarjetasDescubiertas.length > 1 ){
        return;
    }

    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    if ( descubiertas.length < 2 ){
        return;
    }

    comparar(descubiertas);
    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if(tarjetasPendientes.length === 0){
        setTimeout(finalizar,1000);
    }
}

function comparar(tarjetasComparar){

    if(tarjetasComparar[0].dataset.valor === tarjetasComparar[1].dataset.valor ){
        acierto(tarjetasComparar);
    }else{
        error(tarjetasComparar);
    }
}