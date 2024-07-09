
function Usuario(nombre, correo){

    this.nombre = nombre
    this.correo = correo}
  
  
    let nombre = prompt ("Buenos dias, bienvenido a nuestra pagina. Para empezar nos gustaria crear el nombre de usuario")
  
  while ( nombre == ""){
  
     alert ("No se registro ningun usuario")
    nombre = prompt ('Porfavor intente de nuevo')}
  
    alert ("Muchas gracias " + nombre + " es un gusto tenerte")
  
  
  let correo = prompt ("Ahora para finalizar necesitaremos tu correo")
  
  while (correo == ""){
  
    alert ("No se pudo verificar tu correo")
    correo = prompt ("porfavor intente de nuevo")}
  
   alert ("Su corre " + correo + " fue registrado con exito")
  
  
  
  const persona1 = new Usuario (nombre, correo)
 console.log(persona1)
  




const zapatillas = [

   {marca: "Nike", modelo: "AirJordan", precio: 230000,},
   {marca: "Nike", modelo: "Air Max", precio: 175000,},
   { marca: "Nike", modelo: "Nike Air Zoom", precio: 165000},
   {marca: "Adidas", modelo: "Adidas Campus", precio: 140000},
   {marca: "Adidas", modelo: "Adidas Retro", precio: 165000},
   {marca: "Adidas", modelo: "YEEZY", precio: 185000},
   {marca: "Puma", modelo: "Caven", precio: 145000},
   {marca: "Puma", modelo: "Cell Divide", precio: 137000},
   {marca: "Puma", modelo: "X- Ray 2", precio: 119000 }

 ]

let eleccionMarca = prompt ("En esta pagina contamos con stock de varias marca. Nike, Adidas y Puma. Para verlas solo escriba el nombre de la marca que quiera mirar")


const ComprarZapatillas = (Zapatilla) => {

 const marcas = []

 for(let i = 0; i < zapatillas.length; i++){

   if(!marcas.includes(zapatillas[i].marca)){
     marcas.push(zapatillas[i].marca)
   }

 }


 if(marcas.includes(Zapatilla)){

   const filtrados = zapatillas.filter((element) => element.marca === eleccionMarca)

   const modelos = []

   for(let i = 0; filtrados.length > i; i++){
     modelos.push(filtrados[i].modelo)
   }
   const modelosSinComas = modelos.join(" "); 
   const seleccionDeZapa = prompt(`Tenemos en stock estos modelos ${modelosSinComas}`)

   if(!modelos.includes(seleccionDeZapa)){
     return console.log("Error modelo no encontrado")
   }

   const findZapa = zapatillas.find((element) => element.modelo === seleccionDeZapa)

   const precio = parseInt(findZapa.precio)

   alert("Muchas gracias, el total de la compra es de  " + precio)
 }else{
   return console.log("Lo siento no se mostro una marca existente")
 }
}

ComprarZapatillas(eleccionMarca)
















