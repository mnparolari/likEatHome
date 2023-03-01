

/*function bienvenidaNombre () {

  let nombre = prompt ("Hola. Ingrese su nombre para poder darle un atención personalizada")

  if ((nombre == "") || (nombre == null)) {
    console.log("Hola humana/o no identificada/o.") 
  } else {
    console.log("Bienvenida/o " + nombre)
  }
}

bienvenidaNombre();


function Contactos (email,telefono) {

  return email +" "+ telefono;
}

let aclaracion = alert("Las búsquedas proporcionadas a continuación serán enviadas a los contactos declarados al hacerse usuario en el sitio")
let resultado = Contactos ("mnparolari@gmail.com","1134629639")
console.log (resultado)
*/

/*
class DatosPersonales {
  constructor (nombre, apellido, pais, email, telefono) {
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.pais = pais.toUpperCase();
    this.email = email.toUpperCase();
    this.telefono = telefono;
  }

  detalle(){
    return "Nombre: "+this.nombre+"\nApellido: "+this.apellido+"\nPaís: "+this.pais+"\nEmail: "+this.email+"\nTeléfono: "+this.telefono
  }
}

const usuario = new DatosPersonales (prompt("Ingrese su nombre"), prompt("Ingrese su apellido"), prompt("Ingrese país de residencia"), prompt("Ingrese su email"), prompt("Ingrese su teléfono"))

let respuesta = "Si"

do {
    let respuesta = prompt(usuario.nombre+", los datos ingresados son: \n"+usuario.detalle()+ "\n¿Sus datos son correctos?")

      if (respuesta == "No") {
        alert ("Por favor, vuelva a ingresarlos")
      } else if (respuesta == "Si") {
        alert ("Muchas gracias por confirmarnos tus datos.")
      } else {
        alert ("Ocurrió un error y no hemos podido guardar sus datos. Intente nuevamente más tarde.")
      }

} while (respuesta != "Si") 


function recetasCalorias () {

  let calorias = Number(prompt("Ingrese el máximo de calorías que desea que tuviese la receta recomendada"))

  if ((calorias == "") || (calorias == null)) {
    console.log("Ha decidido que no le recomendemos recetas según la cantidad de calorías.");
  } else if (calorias <= 200) {
    console.log ("Le enviamos por email la siguiente receta que contiene menos, o hasta 200 calorías: ...")
  } else if (calorias <= 400) {
    console.log ("Le enviamos por email la siguiente receta que contiene menos, o hasta 400 calorías: ...")
  } else if (calorias <= 600) {
    console.log ("Le enviamos por email la siguiente receta que contiene menos, o hasta 600 calorías: ...")
  } else if (calorias <= 800) {
    console.log ("Le enviamos por email la siguiente receta que contiene menos, o hasta 800 calorías: ...")
  } else if (calorias <= 1000) {
    console.log ("Le enviamos por email la siguiente receta que contiene menos, o hasta 1000 calorías: ...")
  } else  {
    console.log ("Si bien no es recomendable consumir platos con más de 1000 calorías, le enviamos por email la siguiente receta que contiene más de 1000 calorías.")
  }
}

recetasCalorias();


function recetasCalificacion () {

  for (let i = 1; i <= 3; i++) {  

  let ingrediente = prompt("Ingrese hasta tres (3) ingredientes que tenga en su heladera. Por cada uno, le detallaremos la mejor opción según la calificación de nuestros usuarios")
  
  if ((ingrediente == "") || (ingrediente == null)) {
    console.log("Ha decidido que no le recomendemos recetas según los ingredientes de su heladera.");
    break;
  } else if (ingrediente != "") {
    console.log("El "+i+ " ingrediente elegido es " + ingrediente +".")
    console.log("Le enviamos por email la mejor receta con "+ingrediente+" según la calificación de nuestros usuarios.")
    } 
  }
}

recetasCalificacion ();


let bucle = 2;

class RecetasIngredientes {
  constructor (tipocomida, tipoalimento, tiposabor) {
    this.tipocomida = tipocomida;
    this.tipoalimento = tipoalimento;
    this.tiposabor = tiposabor;
  }
}

const recetasIngredientesIngresadas = [];
do {
  recetasIngredientesIngresadas.push (new RecetasIngredientes(prompt("Ingrese el tipo de comida"), prompt("Ingrese el tipo de alimento"),prompt("Ingrese el tipo de sabor")))
  console.log (recetasIngredientesIngresadas)
} while (recetasIngredientesIngresadas.length != bucle)


/*
const tipoComida = ["Desayuno", "Almuerzo", "Merienda", "Cena", "Brunch"]
const tipoAlimento = ["Frutas", "Verduras", "Lácteos", "Granos", "Proteinas"]
const tipoSabor = ["Dulce", "Salado", "Agridulce"]*/
