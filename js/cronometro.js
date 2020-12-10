function iniciaCronometro(){

    var segundos = 10;
    var minutos = 1;
    var segundosTexto;
    var minutosTexto;
    var cronometro;

    function actulizaContador(){
        segundos--;
        if (segundos < 0){
            segundos = 59;
            minutos--;
        }

        if(minutos < 0){
            segundos = 0;
            minutos = 0;
            clearInterval(cronometro);
            gameOver();
        }

        segundosTexto = segundos;
        minutosTexto = minutos;

        if(segundos < 10){
            segundosTexto = "0" + segundos;
        }

        if(minutos < 10){
            minutosTexto = "0" + minutos;
        }

        document.querySelector("#minutos").innerText = minutosTexto;
        document.querySelector("#segundos").innerText = segundosTexto;
    }
    cronometro = setInterval(actulizaContador,1000)
}