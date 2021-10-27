(function(){

    let formulario = document.getElementById("formulario");
    //elementos = formulario.elementos, 
    //boton = document.getElementById('btn');

    let validarNombre = function (e){
        if(formulario.name.value == ''){
            alert("Complete el campo nombre.");
            e.preventDefault();
        }
    };

    let validarEmail = function (e){
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(formulario.email.value.match(mailFormat)){
        } else{

            alert("Email invalido.");
            e.preventDefault();
        }
    };

    let validarDireccion = function (e){
        if(formulario.address.value == ''){
            alert("Complete el campo direccion.");
            e.preventDefault();
        }
    };
    let validarCiudad = function (e){
        if(formulario.city.value == ''){
            alert("Complete el campo ciudad.");
            e.preventDefault();
        }
    };
    let validarArea = function (e){
        if(formulario.area.value == ''){
            alert("Seleccione un área.");
            e.preventDefault();
        }
    };

    let validarRubro = function (e){
        if(formulario.rubro.value == ''){
            alert("Seleccione un rubro.");
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