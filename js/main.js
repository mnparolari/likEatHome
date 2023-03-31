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
    <p>Nos informaste que sos de <strong class="strong">${persona.pais}</strong>, que tu email es <strong class="strong">${persona.email}</strong>, y que tu teléfono es <strong class="strong">${persona.telefono}</strong>. <br>
        ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</p>
    `;
  if (persona.nombre === "" && persona.telefono === "" && persona.pais === "" && persona.email === "") {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">humano/a no identificado/a</strong> &#128518&#128540</h1>
      <p>Nos informaste que sos de un lugar desconocido &#128518&#128540, que tu email es muy vergonzoso para informarlo &#128518&#128540, y que tu teléfono es muy reservado para informarlo &#128518&#128540. <br>
          <br> Aun así... ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! (aunque no podrás enviarte el resultado a tus medios de contactos) &#128170&#9996</p>
      `;
  } else if (persona.nombre === "" || persona.nombre === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">humano/a no identificado/a</strong> &#128518&#128540 </h1>
      <p>Nos informaste que sos de <strong class="strong">${persona.pais}</strong>, que tu email es <strong class="strong">${persona.email}</strong>, y que tu teléfono es <strong class="strong">${persona.telefono}</strong>. <br>
        <br> ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</p>
      `;
  } else if (persona.pais === "" || persona.pais === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">${persona.nombre}</strong></h1>
      <p>Nos informaste que sos de un lugar desconocido &#128518&#128540, que tu email es <strong class="strong">${persona.email}</strong>, y que tu teléfono es <strong class="strong">${persona.telefono}</strong>. <br>
        <br> ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</p>
      `;
  } else if (persona.email === "" || persona.email === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">${persona.nombre}</strong></h1>
      <p>Nos informaste que sos de <strong class="strong">${persona.pais}</strong>, que tu email es muy vergonzoso para informarlo &#128518&#128540, y que tu teléfono es <strong class="strong">${persona.telefono}</strong>. <br>
        <br> ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</p>
      `;
  } else if (persona.telefono === "" || persona.telefono === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hola <strong class="strong">${persona.nombre}</strong></h1>
      <p>Nos informaste que sos de <strong class="strong">${persona.pais}</strong>, que tu email es <strong class="strong">${persona.email}</strong>, y que tu teléfono es muy reservado para informarlo &#128518&#128540. <br>
        <br> ¡Ya podes comenzar a realizar búsquedas de recetas con lo que tengas en tu heladera! &#128170&#9996</p>
      `;
  }

  const aceptar = document.querySelector("#btn-aceptar");
  aceptar.addEventListener("click", () => {
    if (persona.nombre === "" && persona.telefono === "" && persona.pais === "" && persona.email === "") {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Tus datos no fueron guardados correctamente',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tus datos fueron guardados correctamente',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        showConfirmButton: false,
        timer: 2000
      });
    }
  });

  obtenerNombre();
  formulario.reset();
});

//Corroboro si hay datos cargados en el LocalStorage cuando declaran haberlo hecho//
const relogueo = document.querySelector("#btn-relogueo");
  relogueo.addEventListener("click", () => {
    if (localStorage.getItem("datosUsuario") === null) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "¡Ups!",
        text: 'No tenemos tus datos guardados. Por favor, ingresalos para poder continuar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        showConfirmButton: true,
      });
    }
  })


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
      Toastify({
        text: "¡Añadiste una opción a tu selección!",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#ee9b00ff",
          color: '#001219ff',
        },
        }).showToast();
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
    const opcionesComidas = JSON.stringify(depositoComida);
    localStorage.setItem("OpcionesComidas", opcionesComidas);
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
      Toastify({
        text: "¡Eliminaste una opción de tu selección!",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
          background: '#001219ff',
          color: '#ee9b00ff',
        },
        }).showToast();
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
      Toastify({
        text: "¡Añadiste un ingrediente a tu selección!",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#ee9b00ff",
          color: '#001219ff',
        },
        }).showToast();
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
    const opcionesIngredientes = JSON.stringify(depositoIngredientes);
    localStorage.setItem("Ingredientes", opcionesIngredientes);
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
      Toastify({
        text: "¡Eliminaste un ingrediente de tu selección!",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
          background: '#001219ff',
          color: '#ee9b00ff',
        },
        }).showToast();
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
  el.addEventListener("click", () => {
    concatenarArrays();
  });
});

let nombres = "";
let idReceta = "";

//Función para concatenar arrays para búsqueda final + guardo array en LocalStorage//
function concatenarArrays() {
  let arrayFinal = depositoComida.concat(depositoIngredientes); 
  arrayFinal.forEach((ingrediente, index) => {
	nombres += ingrediente.ingles;
	if (index !== arrayFinal.length - 1) {
		nombres += ",";
	}
  const urlBusqueda = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=4a53bc3bdcad430e8ac05888d46ed5a9&ingredients="+nombres+"&number=1"
  fetch(urlBusqueda)
  .then(resp => resp.json())
  .then(resultado => mostrarId(resultado));

  function mostrarId(resultadoId) {
    resultadoId.forEach((id) => {
      idReceta += id.id
      obtenerReceta(idReceta)
    });
    }
  });
}

function obtenerReceta() {
  const urlFinal = "https://api.spoonacular.com/recipes/"+idReceta+"/information?apiKey=4a53bc3bdcad430e8ac05888d46ed5a9"
  fetch(urlFinal)
  .then(resp => resp.json())
  .then(resultadoFinal => resultadoReceta(resultadoFinal))
}


//Creo la estructura interior del modal en HTML con DOM//
const mySeleccionFinal = document.querySelector("#modal-body");

const resultadoReceta = (seleccionFinal) => {
mySeleccionFinal.innerHTML = "";
  seleccionFinal.forEach((selectFinal) => {
    const devolverReceta = document.createElement("article");
    devolverReceta.innerHTML += `
        <div class="recetaFinal">
          <h4>${selectFinal.title}</h4>  
          <img src="${selectFinal.image}" alt="${selectFinal.title}">
          <p> ${selectFinal.instructions} </br></br> También podés encontrar tu receta acá, con muchísima más información:${selectFinal.spoonacularSourceUrl}</p>
          <button type="button" class="btn btn-outline-warning" data-bs-dismiss="modal" id="${selectFinal.id}">Agregar a Recomendaciones</button>
        </div>
`;
    mySeleccionFinal.appendChild(devolverReceta);
  });
};

const aceptar = document.querySelector("#btn-whatsapp");
  aceptar.addEventListener("click", () => {
    obtenerTelefono();
  });

  function obtenerTelefono() {
    const telefonoJSON = localStorage.getItem("datosUsuario");
    if(telefonoJSON) {
      const telefonoJS = JSON.parse(telefonoJSON);
      let telefono = telefonoJS.telefono;
      let confirmarTelefono = document.querySelector("#modal-confirmacion-whatsapp");
      confirmarTelefono.innerHTML = `
      <p>El teléfono que declaraste es: <strong class="strong">${telefono}</strong>. <br><br> ¿Confirmás que querés recibir tu receta personalizada en el Whatsapp de este número?</p>
      `;
      if (telefono === "" || telefono === null) {
        confirmarTelefono.innerHTML = `
        <p>No declaraste ningún teléfono por lo que no podemos enviarte la receta al Whatsapp. Si querés poder realizar esta acción, volvé al comienzo, ingresá a "Comenzar" y declará tus datos.</p>
        `;
      }
    }  
  }

  const enviarWpp = document.querySelector("#btn-aceptar-wpp");
  enviarWpp.addEventListener("click", () => {
    let timerInterval
      Swal.fire({
        title: 'Enviando receta...',
        html: '',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })
  });



/*fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=4a53bc3bdcad430e8ac05888d46ed5a9&ingredients=manzanas,+harina,+azúcar&número=1")
.then(resp => resp.json())
.then(resultado => console.log(resultado));*/
