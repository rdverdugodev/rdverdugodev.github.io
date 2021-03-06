function verficacionEmail(){
    var email = document.querySelector(".search").value;
    var mailformat =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    

    if(email.match(mailformat)){
        document.querySelector(".flex").classList.remove("error-border");
        document.querySelector(".error-email").classList.remove("display-error-email");
        document.querySelector(".flex").classList.add("valid-email-border");
        document.getElementById("texto-search").innerHTML = "Email was sent successfully";
        document.querySelector("#texto-search").classList.add("desaparece");
        
        setTimeout(function(){ 
            document.querySelector(".flex").classList.remove("valid-email-border");
            document.querySelector("#texto-search").classList.remove("desaparece");
            document.getElementById("texto-search").innerHTML = "";
        }, 2500);
        
    }else{
        document.querySelector(".flex").classList.add("error-border");
        document.querySelector(".error-email").classList.add("display-error-email");
        document.getElementById("texto-search").innerHTML = "Please provide a valid email";
    }
    
}


document.querySelector("#boton").addEventListener("click", verficacionEmail);


