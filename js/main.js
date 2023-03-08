/*class TipoComida {
  constructor(nombre, url_img) {
      this.nombre = nombre;
      this.url_img = url_img;
  }

  botonTipoComida(){
      return `	
      <button class = "seleccionador">
        <img src="${this.url_img}">
        <p>${this.nombre}</p>
      </button>
      `
  }
}

class TipoComidaController {
  constructor() {
      this.listaTipoComida = []
  }

  agregarTipoComida(tipoComida) {
      this.listaTipoComida.push(tipoComida)
  }
}

const pusheadorTipoComida = new TipoComidaController()

pusheadorTipoComida.agregarTipoComida (new TipoComida("Con carne", "./img/icons8-paleo-dieta-100.png"))
pusheadorTipoComida.agregarTipoComida (new TipoComida("Vegetariano", "./img/icons8-marca-vegetariana-100.png"))
pusheadorTipoComida.agregarTipoComida (new TipoComida("Vegano", "./img/icons8-comida-vegana-100.png"))
pusheadorTipoComida.agregarTipoComida (new TipoComida("Energía calórica", "./img/icons8-energía-calórica-100.png"))


const generarHtmlTc = document.getElementById('tipo-comida')

pusheadorTipoComida.listaTipoComida.forEach(tipoComida => {

  generarHtmlTc.innerHTML += tipoComida.botonTipoComida()

})

// Frutas 
class Frutas {
  constructor(nombre, url_img) {
      this.nombre = nombre;
      this.url_img = url_img;
  }

  botonFrutas(){
      return `	
      <button>
        <img src="${this.url_img}">
        <p>${this.nombre}</p>
      </button>
      `
  }
}

class FrutasController {
  constructor() {
      this.listaFrutas = []
  }

  agregarFrutas(frutas) {
      this.listaFrutas.push(frutas)
  }
}

const pusheadorFrutas = new FrutasController()

pusheadorFrutas.agregarFrutas (new Frutas ("Manzana","./img/icons8-manzana-100.png"))
pusheadorFrutas.agregarFrutas (new Frutas("Banana", "./img/icons8-plátano-100.png"))
pusheadorFrutas.agregarFrutas (new Frutas("Anana", "./img/icons8-piña-100.png"))
pusheadorFrutas.agregarFrutas (new Frutas("Pera", "./img/icons8-pera-100.png"))


const generarHtmlFrutas = document.getElementById('frutas')

pusheadorFrutas.listaFrutas.forEach(frutas => {

  generarHtmlFrutas.innerHTML += frutas.botonFrutas()

});
*/


const contenedorFrutas = document.querySelector('#frutas');

const mostrarFrutas = (data) => {
  data.forEach (fruta => {
      const botonFruta = document.createElement('article');
      botonFruta.innerHTML = `
                            <div class="contenedor">
                              <img src="${fruta.img}" alt="${fruta.nombre}">
                              <button id='${fruta.id}' class='btn-selector'>${fruta.nombre}</button>
                            </div>
                              `;
      contenedorFrutas.appendChild(botonFruta);
    });
    
    const btnSeleccionarFrutas = document.querySelectorAll('.btn-selector')
    btnSeleccionarFrutas.forEach(el => {
    el.addEventListener('click', (e) => {
      seleccionarFrutas(e.target.id)
    });
  });
}

mostrarFrutas(frutas);

const depositoFrutas = [];

function seleccionarFrutas (id) {
  /* const existe = depositoFrutas.some(fruta => fruta.id === parseInt (id))

  if(existe) {
    depositoFrutas.map()
  }*/

  let frutaEncontrada = frutas.find(fruta => fruta.id === parseInt (id));
  depositoFrutas.push(frutaEncontrada);
  console.log(depositoFrutas)
}

const mySeleccion = document.querySelector('#seleccion');

const seleccionUsuario = (seleccion) => {
  seleccion.forEach (select => {
      const replica = document.createElement('article');
      replica.innerHTML = `
                            <div class="contenedor">
                              <img src="${select.img}" alt="${select.nombre}">
                              <button id='${select.id}' class='btn-selector'>${select.nombre}</button>
                            </div>
                              `;
      mySeleccion.appendChild(replica);
    });
}

seleccionUsuario(depositoFrutas);

/**Datos por prompt: Pedido de datos personales con los que el sitio identificará personalizadamente al usuario como también hacer el envío de los resultados (vía mail o whatsapp).
class DatosPersonales {
  constructor (nombre, pais, email, telefono) {
    this.nombre = nombre.toUpperCase();
    this.pais = pais.toUpperCase();
    this.email = email.toUpperCase();
    this.telefono = telefono;
  }

  detalle(){
    return "Nombre: "+this.nombre+"\nPaís: "+this.pais+"\nEmail: "+this.email+"\nTeléfono: "+this.telefono
  }
}

const usuario = new DatosPersonales (prompt("Ingrese su nombre"), prompt("Ingrese país de residencia"), prompt("Ingrese su email"), prompt("Ingrese su teléfono"))

let respuesta = "Si"

do {
    let respuesta = prompt(usuario.nombre+", los datos ingresados son: \n"+usuario.detalle()+ "\n¿Sus datos son correctos?")

      if ((respuesta == "No") || (respuesta == "") || (respuesta == null)) {
        alert ("Por favor, refresque la página y vuelva a ingresarlos")
        
      } else if ((respuesta == "Si")) {
        alert ("Muchas gracias por confirmarnos tus datos.")
      } else {
        alert ("Ocurrió un error y no hemos podido guardar sus datos. Refresque la página o intente nuevamente más tarde.")
      }

} while (respuesta != "Si") {
  console.log(usuario.detalle())
}*/

/**Datos por prompt: Pedido de datos generales mediante ciclo como primer filtro de la elección de la receta.

let bucle = 1;

class ConsultaReceta {
  constructor (tipocomida, tipoalimento, tipomodo) {
    this.tipocomida = tipocomida.toUpperCase();
    this.tipoalimento = tipoalimento.toUpperCase();
    this.tipomodo = tipomodo.toUpperCase();
  }
}

const datosIngresados = [];
do {
  datosIngresados.push (new ConsultaReceta(prompt("Ingrese el tipo de comida (ejemplo: Con carne)"), prompt("Ingrese el tipo de plato (ejemplo: Comida tipo casera)"),prompt("Ingrese cómo quiere cocinarlo (ejemplo: a la olla)")))
  console.log (datosIngresados)
} while (datosIngresados.length != bucle)*/

/**Lista de ingredientes mediante F.O.S + cantidad de ingredientes en array para uso interno

const listaIngredientes = [
  { tipo: "Fruta", nombre: "Tomate", id: "F1" },
  { tipo: "Fruta", nombre: "Manzana", id: "F2" },
  { tipo: "Fruta", nombre: "Pera", id: "F3" },
  { tipo: "Verdura", nombre: "Choclo", id: "V1" },
  { tipo: "Verdura", nombre: "Morrón", id: "V2" },
  { tipo: "Verdura", nombre: "Cebolla", id: "V3" },
  { tipo: "Proteína", nombre: "Ternera", id: "P1" },
  { tipo: "Proteína", nombre: "Pollo", id: "P2" },
  { tipo: "Proteína", nombre: "Pescado", id: "P3" },
  { tipo: "Granos/Cereales", nombre: "Arroz", id: "G1" },
  { tipo: "Granos/Cereales", nombre: "Nuez", id: "G2" },
  { tipo: "Granos/Cereales", nombre: "Almendra", id: "G3" },
  { tipo: "Otros", nombre: "Mayonesa", id: "O1" },
  { tipo: "Otros", nombre: "Miel", id: "O2" },
  { tipo: "Otros", nombre: "Aceite de oliva", id: "O3" }
];

const resultado1 = listaIngredientes.filter((el) =>el.nombre.includes("Tomate"));
const resultado2 = listaIngredientes.filter((el) => el.id.includes("P1"));
const resultado3 = listaIngredientes.filter((el) =>el.nombre.includes("Arroz"));

function retornarResultados() {
  console.log(resultado1);
  console.log(resultado2);
  console.log(resultado3);
}

function cantidadIngredientes() {
  console.log("(Mensaje interno: Existen actualmente "+listaIngredientes.length+" productos cargados)");
}

retornarResultados();
cantidadIngredientes();*/

/**Datos por parámetro: Consulta de ingredientes + respuesta con receta.

class ConsultaIngrediente {
  constructor (ingrediente1, ingrediente2, ingrediente3) {
    this.ingrediente1 = ingrediente1.toUpperCase();
    this.ingrediente2 = ingrediente2.toUpperCase();
    this.ingrediente3 = ingrediente3.toUpperCase();
  }

  resultadoIngrediente() {
    return "La receta que elegimos con los siguientes ingredientes que ingresaste: "+this.ingrediente1+", "+this.ingrediente2+", y "+this.ingrediente3+", es la siguiente:\nhttps://www.bonviveur.es/recetas/arroz-con-carne-picada"
  }
}

const ingredientesReceta = [];
ingredientesReceta.push (new ConsultaIngrediente("Arroz", "Tomate", "Carne"))

for (const ConsultaIngrediente of ingredientesReceta)
  console.log(ConsultaIngrediente.resultadoIngrediente())*/

/**Incorporación de ingredientes + cantidad de ingredientes ACTUAL en array para uso interno

function cargarIngredientes() {
  listaIngredientes.push({ tipo: "Fruta", nombre: "Tomate", id: "F1" })
  cantidadIngredientes();
} 
cargarIngredientes();
*/
