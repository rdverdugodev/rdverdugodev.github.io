   
function iniciar (){

    reparteTarjetas();

    document.querySelector("#endGame").classList.remove("visible");
    document.querySelector("#game-over").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function(elemento){
        elemento.addEventListener("click", descubrir);
    });

    iniciaCronometro();
}

iniciar();

    document.querySelectorAll(".reiniciar").forEach(function(elemento){
        elemento.addEventListener("click", iniciar);
    });
    

  
  
  