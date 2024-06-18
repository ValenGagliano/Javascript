
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


alert ( "Gracias por Registrate " + NombreDelUsuraio + " En Esta Pagina Contamos con Las Nike AirJordan, Adidas Retro y Puma modelo 180 En stock")


let salir 

while (salir !== "salir") {

    const ingresaZapatillas = prompt ( "Caul de las zapatillas que tenemos en stock te gustaria llevar? ")


console.log(ingresaZapatillas)

 if (ingresaZapatillas === "Nike AirJordan") {

alert ("Perfecto El Final Seria De 120.000")

}


if ( ingresaZapatillas === "Adidas Retro") {


    alert ("Muchas Gracias El precio Seria De 145.000")

}
if ( ingresaZapatillas === "Puma modelo 180") {



    alert ("Muchas Gracias El Precio Seria de 110.000")
}



const final = prompt ("Te gustaria Agregar Algo Mas ?")

if ( final === "Salir"){

salir = final

}



}




