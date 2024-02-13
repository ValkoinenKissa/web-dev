function validar(){
    return validarContrasena()

    function validarContrasena(){
        let passwd =document.getElementById("contrasena").value;
        let passwdConfirm = document.getElementById("repite_pass").value;
        if(passwd.length >=8){
            if(passwd == passwdConfirm){
                return true;
            }
            return false;
        }

    }


}