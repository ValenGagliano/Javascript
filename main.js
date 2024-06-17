
let NombreDelUsuraio = prompt ("Ingrese Su Nombre De Usuario") 

if (NombreDelUsuraio.length > 1 ) {


    alert ( "Gracias " + NombreDelUsuraio + " Por registrar tu usuario");


}

else {


    alert( "Usuario No Registrado");
}





let EdadDelUsuario = prompt ("Ingrese Su Edad")



if (EdadDelUsuario >= "18") {


    alert ("Gracias Por Ingresar La Edad Del Usuario");

}

else {


    alert ("Usted Debe Ser Mayor De Edad Para Continuar")
}



let CorreoDelUsuario = prompt("Ingresa Su Correo Electronico")

if(CorreoDelUsuario.includes("@gmail.com")){
    alert ("Su Correo Fue Verificado")
}else{
    alert ("Su Correo Es Invalido")
}


