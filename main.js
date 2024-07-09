

let salir = salir
let nombre = prompt("Ingrese su nombre")

if (nombre.length > 1){ {


alert ("Bienvenido " + nombre + " a la mejor tienda de zapatillas")

}

    function PedirEdad (){

        let edad = prompt ("Usted debre ingresar su edad")
    
    
    if (edad >= 18) {
    
    alert ("Gracias por verificar que su edad es de " + edad + " ."  )
    
    } 
    
    else if (edad < 18 ) { {
    
        alert ( "Ustede debe Ser mayor de edad para continuar.")
    }}}
    
    PedirEdad ();
    
    function PedirCorreo (){
    
    let CorreoElectronico = prompt (" Para finalizar el registro de usuario le pediremos su correo electronico.")
    
    if (CorreoElectronico.includes ("@gmail.com"))
    
        alert ("Tu correo " + CorreoElectronico + " fue registrado con exito.")
    
    else if (CorreoElectronico.length < 1) {{
    
    alert ("Su correo no es valido, intente nuevamente")
    }}}
    
    PedirCorreo ();



    function elegirZapatillas() {
        let opciones = prompt("A dia de hoy contamos con 3 zapatillas en stock n\ 1. Adidas Retro n\ 2. Nike AirJordan n\ 3. Puma Clasic 180 ")
        const precioAdidas = 123000;
    
        const iva = (a,b) => a * b
    
        const resultado = iva(precioAdidas, 0.21)
    
        const precioFinal = (a,b) => a + b
    
        const resultadoFinalAdidas = precioFinal(precioAdidas, resultado)
    
        if (opciones == 1 || opciones == " Adidas Retro") {
    
            alert("Su Precio final es de " + resultadoFinalAdidas + " Muchas Gracias por su compra.")
    
        }
    
    
        else if (opciones == 2 || opciones == "Nike AirJordan"){{ 
            const precioNike = 145000;
    
            const iva = (a,b) => a * b
        
            const resultado = iva(precioNike, 0.21)
        
            const precioFinal = (a,b) => a + b
        
            const resultadoFinalNike = precioFinal(precioNike, resultado)
            
            
            alert ("Su precio final es de " + resultadoFinalNike + " Muchas gracias por su compra.")

        }}


        else if (opciones == 3 || opciones == "Puma Clasic 180"){

            const precioPuma = 110000;
    
            const iva = (a,b) => a * b
        
            const resultado = iva(precioPuma, 0.21)
        
            const precioFinal = (a,b) => a + b
        
            const resultadoFinalPuma = precioFinal(precioPuma, resultado)
            
            
            alert ("Su precio final es de " + resultadoFinalPuma + " Muchas gracias por su compra.")


        }}
    
    elegirZapatillas ();

} 

























