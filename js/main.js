//Corroboro si el usuario ya ingresó alguna vez y hay datos guardados en localStorage//
obtenerNombre();

//Objeto de usuario//
class DatosPersonales {
  constructor(nombre, pais, telefono, email) {
    this.nombre = nombre;
    this.pais = pais;
    this.telefono = telefono;
    this.email = email;
  }
}

//Array de usuario//
const usuarios = [];

//Datos de usuario//
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = document.querySelector("#nombre").value;
  let pais = document.querySelector("#pais").value;
  let email = document.querySelector("#email").value;
  let telefono = document.querySelector("#telefono").value;

  let persona = new DatosPersonales(nombre, pais, telefono, email);
  usuarios.push(persona);

  const usuario = JSON.stringify(persona);
  localStorage.setItem("datosUsuario", usuario);

  let confirmacionDatos = document.querySelector("#modal-confirmacion-cuerpo");

  confirmacionDatos.innerHTML = `
    <h1>Hola <strong class="strong">${persona.nombre}</strong></h1>
    <h2>Nos informaste que sos de <strong class="strong">${persona.pais}</strong>, que tu email es <strong class="strong">${persona.email}</strong>, y que tu teléfono es <strong class="strong">${persona.telefono}</strong>. <br>
        ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</h2>
    `;
  if (persona.nombre === "" && persona.telefono === "" && persona.pais === "" && persona.email === "") {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">humano/a no identificado/a</strong> &#128518&#128540</h1>
      <h2>Nos informaste que sos de un lugar desconocido &#128518&#128540, que tu email es muy vergonzoso para informarlo &#128518&#128540, y que tu teléfono es muy reservado para informarlo &#128518&#128540. <br>
          <br> Aun así... ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! (aunque no podrás enviarte el resultado a tus medios de contactos) &#128170&#9996</h2>
      `;
  } else if (persona.nombre === "" || persona.nombre === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">humano/a no identificado/a</strong> &#128518&#128540 </h1>
      <h2>Nos informaste que sos de <strong class="strong">${persona.pais}</strong>, que tu email es <strong class="strong">${persona.email}</strong>, y que tu teléfono es <strong class="strong">${persona.telefono}</strong>. <br>
        <br> ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</h2>
      `;
  } else if (persona.pais === "" || persona.pais === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">${persona.nombre}</strong></h1>
      <h2>Nos informaste que sos de un lugar desconocido &#128518&#128540, que tu email es <strong class="strong">${persona.email}</strong>, y que tu teléfono es <strong class="strong">${persona.telefono}</strong>. <br>
        <br> ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</h2>
      `;
  } else if (persona.email === "" || persona.email === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">${persona.nombre}</strong></h1>
      <h2>Nos informaste que sos de <strong class="strong">${persona.pais}</strong>, que tu email es muy vergonzoso para informarlo &#128518&#128540, y que tu teléfono es <strong class="strong">${persona.telefono}</strong>. <br>
        <br> ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</h2>
      `;
  } else if (persona.telefono === "" || persona.telefono === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">${persona.nombre}</strong></h1>
      <h2>Nos informaste que sos de <strong class="strong">${persona.pais}</strong>, que tu email es <strong class="strong">${persona.email}</strong>, y que tu teléfono es muy reservado para informarlo &#128518&#128540. <br>
        <br> ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</h2>
      `;
  }

  obtenerNombre();
  formulario.reset();
});


//Función para obtener el nombre del objeto del array del localStorage y saludar//
function obtenerNombre() {
  const usuarioJSON = localStorage.getItem("datosUsuario");
  if(usuarioJSON) {
    const usuarioJS = JSON.parse(usuarioJSON);
    let saludo = usuarioJS.nombre;
    let saludar = document.querySelector("#saludo");
      saludar.innerHTML = `
      <h1>Hola <strong class="strong">${saludo}</strong></h1>
      `;
  }  
}


//Elección tipo comida//

//Creo opciones previas sobre la receta en el HTML con DOM//
const contenedorComida = document.querySelector("#comidas");

const mostrarComida = (dataC) => {
  dataC.forEach((comida) => {
    const botonComida = document.createElement("article");
    botonComida.innerHTML += `
                            <div class="contenedor">
                              <img src="${comida.img}" alt="${comida.nombre}">
                              <button id='${comida.id}' class='btn-selector-c'>${comida.nombre}</button>
                            </div>
                              `;
    contenedorComida.appendChild(botonComida);
  });

  //Le agrego evento click para seleccionar el elemento//
  const btnSeleccionarComida = document.querySelectorAll(".btn-selector-c");
  btnSeleccionarComida.forEach((el) => {
    el.addEventListener("click", (e) => {
      seleccionarComida(e.target.id);
    });
  });
};

//Muestro elementos en HTML//
mostrarComida(comida);

//Array de selección de usuario//
const depositoComida = [];

//Función para llenar el array con los datos seleccionados por el usuario sin repetición en la selección//
function seleccionarComida(id) {
  const existeC = depositoComida.some((comida) => comida.id === parseInt(id));
  if (existeC) {
    depositoComida.splice(0, 1);
  } else {
    let comidaEncontrado = comida.find((comida) => comida.id === parseInt(id));
    depositoComida.push(comidaEncontrado);
    seleccionUsuarioC(depositoComida);
  }
}

//Creo opciones seleccionadas por usuario en HTML con DOM//
const mySeleccionC = document.querySelector("#seleccionComidas");

const seleccionUsuarioC = (seleccionC) => {
  mySeleccionC.innerHTML = "";
  seleccionC.forEach((selectC) => {
    const replicarC = document.createElement("article");
    replicarC.innerHTML += `
                            <div class="contenedor">
                              <img src="${selectC.img}" alt="${selectC.nombre}">
                              <button type="button" class="btn-close" aria-label="Close" id="${selectC.id}"></button>
                              <p>${selectC.nombre}</p>
                            </div>
                              `;
    mySeleccionC.appendChild(replicarC);
  });
  //Le agrego evento click para eliminar lo seleccionado del HTML y del Array//
  const btnEliminarComida = document.querySelectorAll(".btn-close");
  btnEliminarComida.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      const indexComida = depositoComida.findIndex(
        (comida) => comida.id === parseInt(comida.id)
      );
      if (indexComida !== -1) {
        depositoComida.splice(indexComida, 1);
      }
    });
  });
};

//Elección ingredientes//

//Creo ingredientes en el HTML con DOM//
const contenedorIngredientes = document.querySelector("#ingredientes");

const mostrarIngredientes = (dataI) => {
  dataI.forEach((ingrediente) => {
    const botonIngredientes = document.createElement("article");
    botonIngredientes.innerHTML += `
                            <div class="contenedor">
                              <img src="${ingrediente.img}" alt="${ingrediente.nombre}">
                              <button id='${ingrediente.id}' class='btn-selector-i'>${ingrediente.nombre}</button>
                            </div>
                              `;
    contenedorIngredientes.appendChild(botonIngredientes);
  });

  //Le agrego evento click para seleccionar el elemento//
  const btnSeleccionarIngredientes =
    document.querySelectorAll(".btn-selector-i");
  btnSeleccionarIngredientes.forEach((el) => {
    el.addEventListener("click", (e) => {
      seleccionarIngredientes(e.target.id);
    });
  });
};

//Muestro elementos en HTML//
mostrarIngredientes(ingredientes);

//Array de selección de usuario//
const depositoIngredientes = [];

//Función para llenar el array con los datos seleccionados por el usuario sin repetición en la selección//
function seleccionarIngredientes(id) {
  const existeI = depositoIngredientes.some(
    (ingrediente) => ingrediente.id === parseInt(id)
  );
  if (existeI) {
    depositoIngredientes.splice(0, 1);
  } else {
    let ingredienteEncontrado = ingredientes.find(
      (ingrediente) => ingrediente.id === parseInt(id)
    );
    depositoIngredientes.push(ingredienteEncontrado);
    seleccionUsuarioI(depositoIngredientes);
  }
}

//Creo ingredientes seleccionados por usuario en HTML con DOM//
const mySeleccionI = document.querySelector("#seleccionIngredientes");

const seleccionUsuarioI = (seleccionI) => {
  mySeleccionI.innerHTML = "";
  seleccionI.forEach((selectI) => {
    const replicarI = document.createElement("article");
    replicarI.innerHTML += `
                            <div class="contenedor">
                              <img src="${selectI.img}" alt="${selectI.nombre}">
                              <button type="button" class="btn-close" aria-label="Close" id="${selectI.id}"></button>
                              <p>${selectI.nombre}</p>
                            </div>
                              `;
    mySeleccionI.appendChild(replicarI);
  });

  //Le agrego evento click para eliminar lo seleccionado del HTML y del Array//
  const btnEliminarIngredientes = document.querySelectorAll(".btn-close");
  btnEliminarIngredientes.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      const indexIngredientes = depositoIngredientes.findIndex(
        (ingredientes) => ingredientes.id === parseInt(ingredientes.id)
      );
      if (indexIngredientes !== -1) {
        depositoIngredientes.splice(indexIngredientes, 1);
      }
    });
  });
};

//Agrego evento click al botón de "buscar receta"//
const btnResultadoFinal = document.querySelectorAll("#btn-final");
btnResultadoFinal.forEach((el) => {
  el.addEventListener("click", (e) => {
    concatenarArrays(e.target);
  });
});

//Función para concatenar arrays para búsqueda final//
function concatenarArrays() {
  let resultadoFinal = depositoComida.concat(depositoIngredientes);
  console.log(resultadoFinal);
  resultadoReceta(recetas);
}

//Creo la estructura interior del modal en HTML con DOM//
const mySeleccionFinal = document.querySelector("#modalBody");

const resultadoReceta = (seleccionFinal) => {
  mySeleccionFinal.innerHTML = "";
  seleccionFinal.forEach((selectFinal) => {
    const devolverReceta = document.createElement("article");
    devolverReceta.innerHTML += `
        <div class="recetaFinal">
          <h4 class="tituloFinal">${selectFinal.titulo}</h4>
          <img src="${selectFinal.img}" alt="${selectFinal.titulo}">
          <p>${selectFinal.descripcion}</p>
          <button type="button" class="btn btn-outline-warning" data-bs-dismiss="modal" id="${selectFinal.id}">Agregar a Recomendaciones</button>
        </div>
`;
    mySeleccionFinal.appendChild(devolverReceta);
  });
};


