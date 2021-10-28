(function(){

    let formulario = document.getElementById("formulario");
    //elementos = formulario.elementos, 
    //boton = document.getElementById('btn');

    let validarNombre = function (e){
        if(formulario.name.value == ''){
            let msj = document.getElementById("msjName");
            msj.innerHTML = "Complete el campo nombre.";
            //alert("Complete el campo nombre.");
            e.preventDefault();
        }
    };

    let validarEmail = function (e){
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(formulario.email.value.match(mailFormat)){
        } else{
            let msj = document.getElementById("msjEmail");
            msj.innerHTML = "El email ingresado es incorrecto.";
            e.preventDefault();
        }
    };

    let validarDireccion = function (e){
        if(formulario.address.value == ''){
            let msj = document.getElementById("msjAddress");
            msj.innerHTML = "Complete el campo dirección.";
            e.preventDefault();
        }
    };
    let validarCiudad = function (e){
        if(formulario.city.value == ''){
            let msj = document.getElementById("msjCity");
            msj.innerHTML = "Complete el campo ciudad.";
            e.preventDefault();
        }
    };
    let validarArea = function (e){
        if(formulario.area.value == ''){
            let msj = document.getElementById("msjArea");
            msj.innerHTML = "Seleccione un área.";
            e.preventDefault();
        }
    };

    let validarRubro = function (e){
        if(formulario.rubro.value == ''){
            let msj = document.getElementById("msjRubro");
            msj.innerHTML = "Seleccione un rubro.";
            e.preventDefault();
        }
    };
    

    let validar = function(e){
        validarNombre(e);
        validarEmail(e);
        validarDireccion(e);
        validarCiudad(e);
        validarArea(e);
        validarRubro(e);

    };

    formulario.addEventListener("submit", validar);

}())