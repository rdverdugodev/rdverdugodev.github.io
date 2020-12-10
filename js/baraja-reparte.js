function barajaTarjetas(){
    var tarjetas;

    tarjetas = totalTarjetas.sort(function(){
        return 0.5 - Math.random();
    });

    return tarjetas;
}

function reparteTarjetas(){
    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas();
    mesa.innerHTML="";

    tarjetasBarajadas.forEach(function(elemento){
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML = `<div class="tarjeta" data-valor="${elemento}"><div class="tarjeta__contenido"><img src="./image/${elemento}" alt="gatitos"></div></div>` ;

        mesa.appendChild(tarjeta);

    });
}
