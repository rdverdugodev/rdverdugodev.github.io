function barajaTarjetas(){
    var resultado;
  
    resultado = totalTarjetas.sort(function(){
      return 0.5 - Math.random();
    })
  
    return resultado;
  
  }
  
  
  function repartoTarjetas(){
  
    var mesa = document.querySelector("#mesa");
    var tarjetasBarajeadas = barajaTarjetas();
  
    tarjetasBarajeadas.forEach(function(elemento){
  
      var tarjeta = document.createElement("div");
  
      tarjeta.innerHTML = `<div class="tarjeta" data-valor= "${elemento}"><div class="tarjeta__contenido">${elemento}</div></div>`
  
      mesa.appendChild(tarjeta);
  
    });
  
  }