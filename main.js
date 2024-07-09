
//function Usuario(nombre, correo){

  //  this.nombre = nombre
  //  this.correo = correo}
  
  
   // let nombre = prompt ("Buenos dias, bienvenido a nuestra pagina. Para empezar nos gustaria crear el nombre de usuario")
  
 // while ( nombre == ""){
  
   //  alert ("No se registro ningun usuario")
   // nombre = prompt ('Porfavor intente de nuevo')}
  
   // alert ("Muchas gracias " + nombre + " es un gusto tenerte")
  
  
 // let correo = prompt ("Ahora para finalizar necesitaremos tu correo")
  
 // while (correo == ""){
  
    //  alert ("No se pudo verificar tu correo")
    // correo = prompt ("porfavor intente de nuevo")}
  
   // alert ("Su corre " + correo + " fue registrado con exito")
  
  
  
  //const persona1 = new Usuario (nombre, correo)
 // console.log(persona1)
  
//MOSTRAR ARRAY ANTES DE LA FUNCION ELEGIR ZAPATILLAS, PARA PODER MOSTRAR 3 TIPOS DE ZAPATILLAS DE
//DISTINTAS MARCAS Y LUEGO DARLE LA OPCION DE ELEGIRLAS 

const zapatillasNike = [{marca: "Nike", modelo: "AirJodan", precio: 230000,},
    {marca: "Nike", modelo: "Air Max", precio: 175000,},
    { marca: "Nike", modelo: "Nike Air Zoom", precio: 165000,},]

const zapatillasAdidas = [{marca: "Adidas", modelo: "Adidas Campus", precio: 140000},
      {marca: "Adidas", modelo: "Adidas Retro", precio: 165000},
      {marca: "Adidas", modelo: "YEEZY", precio: 185000,}]
 
      const zapatillasPuma = [{marca: "Puma", modelo: "Caven", precio: 145000},
    {marca: "Puma", modelo: "Cell Divide", precio: 137000},
    {marca: "Puma", modelo: "X- Ray 2", precio: 119000 },]

//const resultado4 = zapatillasNike.find((zapatilla) => 

   //zapatilla.modelo === "Air Max")

   //console.log(resultado4)

let eleccionMarca = prompt ("En esta pagina contamos con stock de varias marca. Nike, Adidas y Puma. Para verlas solo escriba el nombre de la marca que quiera mirar")

const marcasNike = []



if(eleccionMarca == "Nike" || eleccionMarca == "nike"){

zapatillasNike.forEach((tipos) => {

console.log(tipos.modelo)

marcasNike.push(tipos.modelo)


})
let eleccionCompra = prompt ( "En la seccion de nike contamos con las " + marcasNike + "Cuales desearias llevar ?")




}


















