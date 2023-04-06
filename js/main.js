
//Varibales globales//
let nombres = "";
let idReceta = "";


//Arrays//
const usuarios = [];
const depositoIngredientes = [];

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

//Objeto de recetas recomendadas//
class Recetasrecomendadas {
  constructor(titulo, comentario, img, link, nombreUsuario, diaHora) {
    this.titulo = titulo;
    this.comentario = comentario;
    this.img = img;
    this.link = link;
    this.nombreUsuario = nombreUsuario;
    this.diaHora = diaHora;
  }
}

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
    <h1>Hello <strong class="strong">${persona.nombre}</strong></h1>
    <p>You informed us that your country is <strong class="strong">${persona.pais}</strong>, that your email is <strong class="strong">${persona.email}</strong>, and that your phone number is <strong class="strong">${persona.telefono}</strong>. <br>
    <br> Click on <strong class="strong">"LOAD AGAIN"</strong> if you want to reload the data, otherwise, press <strong class="strong">"ACCEPT"</strong>. <br>
    <br> Now you can start searching for recipes with whatever you have in your fridge! &#128170&#9996</p>
    `;
  if (persona.nombre === "" && persona.telefono === "" && persona.pais === "" && persona.email === "") {
    confirmacionDatos.innerHTML = `
      <h1>Hello <strong class="strong">unidentified human</strong> &#128518&#128540</h1>
      <p>You informed us that you are from an unknown place &#128518&#128540, that your email is too embarrassing to report it &#128518&#128540, and that your phone is too reserved to report it &#128518&#128540. <br>
          <br> Even so... Now you can start searching for recipes with whatever you have in your fridge! (aunque no podrás enviarte el resultado a tus medios de contactos) &#128170&#9996</p>
      `;
  } else if (persona.nombre === "" || persona.nombre === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hello <strong class="strong">unidentified human</strong> &#128518&#128540 </h1>
      <p>You informed us that your country is <strong class="strong">${persona.pais}</strong>, that your email is <strong class="strong">${persona.email}</strong>, and that your phone number is <strong class="strong">${persona.telefono}</strong>. <br>
      <br> Click on <strong class="strong">"LOAD AGAIN"</strong> if you want to reload the data, otherwise, press <strong class="strong">"ACCEPT"</strong>
      <br> Now you can start searching for recipes with whatever you have in your fridge! &#128170&#9996</p>
      `;
  } else if (persona.pais === "" || persona.pais === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hello <strong class="strong">${persona.nombre}</strong></h1>
      <p>You informed us that you are from an unknown place &#128518&#128540, that your email is <strong class="strong">${persona.email}</strong>, and that your phone number is <strong class="strong">${persona.telefono}</strong>. <br>
      <br> Click on <strong class="strong">"LOAD AGAIN"</strong> if you want to reload the data, otherwise, press <strong class="strong">"ACCEPT"</strong>
      <br> Now you can start searching for recipes with whatever you have in your fridge! &#128170&#9996</p>
      `;
  } else if (persona.email === "" || persona.email === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hello <strong class="strong">${persona.nombre}</strong></h1>
      <p>You informed us that your country is <strong class="strong">${persona.pais}</strong>, that your email is too embarrassing to report it &#128518&#128540, and that your phone number is <strong class="strong">${persona.telefono}</strong>. <br>
      <br> Click on <strong class="strong">"LOAD AGAIN"</strong> if you want to reload the data, otherwise, press <strong class="strong">"ACCEPT"</strong>
      <br> Now you can start searching for recipes with whatever you have in your fridge! &#128170&#9996</p>
      `;
  } else if (persona.telefono === "" || persona.telefono === null) {
    confirmacionDatos.innerHTML = `
      <h1>Hello <strong class="strong">${persona.nombre}</strong></h1>
      <p>You informed us that your country is <strong class="strong">${persona.pais}</strong>, that your email is <strong class="strong">${persona.email}</strong>, and that your phone is too reserved to report it &#128518&#128540. <br>
      <br> Click on <strong class="strong">"LOAD AGAIN"</strong> if you want to reload the data, otherwise, press <strong class="strong">"ACCEPT"</strong>
      <br> Now you can start searching for recipes with whatever you have in your fridge! &#128170&#9996</p>
      `;
  }

  const aceptar = document.querySelector("#btn-aceptar");
  const mostrarSitio = document.querySelector("#mostrar");
  aceptar.addEventListener("click", () => {
    if (persona.nombre === "" && persona.telefono === "" && persona.pais === "" && persona.email === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Your data was not saved correctly",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your data was saved correctly",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        showConfirmButton: false,
        timer: 2000,
      });
      mostrarSitio.classList.remove('hide');
    }
  });

  obtenerNombre();
  formulario.reset();
});

//Corroboro si hay datos cargados en el LocalStorage cuando declaran haberlo hecho//
const relogueo = document.querySelector("#btn-relogueo");
const mostrarRelogueo = document.querySelector("#mostrar");
relogueo.addEventListener("click", () => {
  if (localStorage.getItem("datosUsuario") === null) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "¡Ups!",
      text: "We do not have your data saved. Please, enter them to be able to continue",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      showConfirmButton: true,
    });
    
  }else {
    mostrarRelogueo.classList.remove('hide');
  }
});

//Función para obtener el nombre del objeto del array del localStorage y saludar//
function obtenerNombre() {
  const usuarioJSON = localStorage.getItem("datosUsuario");
  if (usuarioJSON) {
    const usuarioJS = JSON.parse(usuarioJSON);
    let saludo = usuarioJS.nombre;
    let saludar = document.querySelector("#saludo");
    saludar.innerHTML = `
      <h1>Hello <strong class="strong">${saludo}</strong></h1>
      `;
  }
}

//Creo recetas recomendadas en el HTML con DOM//
const contenedorRecomendados = document.querySelector("#card-group");

const mostrarRecetas = (dataR) => {
  contenedorRecomendados.innerHTML = "";
  dataR.forEach((receta) => {
    const botonRecetas = document.createElement("div");
    botonRecetas.innerHTML += `
    <div class="card">
      <img src="${receta.img}" class="card-img-top" alt="${receta.titulo}">
      <div class="card-body">
        <h5 class="card-title">${receta.titulo}</h5>
        <p class="card-text">
        "${receta.comentario}"
        </p>
        <a href="${receta.link}" target="_blank">Review recipe</a>
      </div>
      <div class="card-footer">
        <small class="text-muted">Recommended by ${receta.nombreUsuario} ${receta.diaHora}</small>
      </div>
    </div>
                              `;
    contenedorRecomendados.appendChild(botonRecetas);
  });
}

mostrarRecetas(recetasRecomendados);


//Elección ingredientes//

//Creo ingredientes en el HTML con DOM//
const contenedorIngredientes = document.querySelector("#ingredientes");

const mostrarIngredientes = (dataI) => {
  dataI.forEach((ingrediente) => {
    const botonIngredientes = document.createElement("article");
    botonIngredientes.innerHTML += `
                            <div class="contenedor">
                              <img type= "button" id='${ingrediente.id}' class='btn-selector-i' src="${ingrediente.img}" alt="${ingrediente.nombre}">
                              <p>${ingrediente.nombre}</p>
                            </div>
                              `;
    contenedorIngredientes.appendChild(botonIngredientes);
  });

  //Le agrego evento click para seleccionar el elemento//
  const btnSeleccionarIngredientes = document.querySelectorAll(".btn-selector-i");
  btnSeleccionarIngredientes.forEach((el) => {
    el.addEventListener("click", (e) => {
      Toastify({
        text: "¡You added an ingredient to your selection!",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#ee9b00ff",
          color: "#001219ff",
        },
      }).showToast();
      seleccionarIngredientes(e.target.id);
    });
  });
};

//Muestro elementos en HTML//
mostrarIngredientes(ingredientes);

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
                              <button type="button" class="btn-close" aria-label="Close" id="${selectI.id}"></button>
                              <img src="${selectI.img}" alt="${selectI.nombre}">
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
        text: "¡You removed an ingredient from your selection!",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
          background: "#001219ff",
          color: "#ee9b00ff",
        },
      }).showToast();
      e.target.parentElement.remove();
      const indexIngredientes = depositoIngredientes.findIndex(
        (ingredientes) => ingredientes.id === parseInt(ingredientes.id)
      );
      if (indexIngredientes !== -1) {
        depositoIngredientes.splice(indexIngredientes, 1);
      }
      console.log(depositoIngredientes);
    });
  });
};

const loading = document.querySelector('#spinner');

//Agrego evento click al botón de "buscar receta"//
const btnResultadoFinal = document.querySelectorAll("#btn-final");
btnResultadoFinal.forEach((el) => {
  el.addEventListener("click", () => {
    iterarArrayFinal();
    loading.classList.remove('hide');
  });
});

//Función para obtener string de nombres para pasar a la URL por parámetro + fetch para obtener el primer resultado de la API//
function iterarArrayFinal() {
  depositoIngredientes.forEach((ingrediente, index) => {
    nombres += ingrediente.busqueda;
    if (index !== depositoIngredientes.length - 1) {
      nombres += ",";
    }
  });
  const urlBusqueda = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=4a53bc3bdcad430e8ac05888d46ed5a9&ingredients=" +nombres +"&number=1";
  fetch(urlBusqueda)
    .then((resp) => resp.json())
    .then((resultado) => {
      if (resultado.length > 0) {
        mostrarId(resultado);
      } else {
        mySeleccionFinal.innerHTML += `
          <div class="noRecetaFinal">
            <p> ¡Upss! <br> <br> You have not declared any ingredients or we have not found a recipe according to what you selected. You can try again with other ingredients or other combinations.</p>
          </div>
          `;
          loading.classList.add('hide');
      }
    }); 
};

function mostrarId(resultadoId) {
  resultadoId.forEach((id) => {
    idReceta = id.id;
    obtenerReceta(idReceta);
  });
}

function obtenerReceta() {
  const urlFinal = "https://api.spoonacular.com/recipes/" +idReceta +"/information?apiKey=4a53bc3bdcad430e8ac05888d46ed5a9";
  fetch(urlFinal)
    .then((resp) => resp.json())
    .then((resultadoFinal) => resultadoReceta(resultadoFinal));
}

//Creo la estructura interior del modal en HTML con DOM//
const mySeleccionFinal = document.querySelector("#modal-body");

const resultadoReceta = (seleccionFinal) => {
  loading.classList.add('hide');
  mySeleccionFinal.innerHTML += `
  <div class="recetaFinal">
    <h4>${seleccionFinal.title}</h4>  
    <img src="${seleccionFinal.image}" alt="${seleccionFinal.title}">
    <p> ${seleccionFinal.instructions} </br></br> You can also find your recipe here, with more information: </p><a href="${seleccionFinal.spoonacularSourceUrl}" target="_blank">View Recipe</a><br>
    <br><button type="button" class="btn btn-outline-warning" id="btnRecomendacion" data-bs-target="#modal-recomendados" data-bs-toggle="modal" data-bs-dismiss="modal">Add to "Recommendations"</button>
    <hr>
  </div>
`;
  if (seleccionFinal.title === null || seleccionFinal.title === "") {
    mySeleccionFinal.innerHTML += `
  <div class="noRecetaFinal">
    <p> You have not declared any ingredients or we have not found a recipe according to what you selected. </p>
  </div>
  `;
  };
  const receta = JSON.stringify(seleccionFinal);
  localStorage.setItem("recetaUsuario", receta);
};

function resetear() {
  mySeleccionI.innerHTML = "";
  mySeleccionFinal.innerHTML = "";
  depositoIngredientes.length = 0;
  nombres = "";
};

const recomendacion = document.querySelector("#comentario");
  recomendacion.addEventListener("submit", (e) => {
    e.preventDefault();

  let textarea = document.querySelector("#floatingTextarea").value;

  const guardarComentario = document.querySelector("#btn-aceptar-recomendados");
  guardarComentario.addEventListener("click", () => {
    const comentarioUsuario = JSON.stringify(textarea)
    localStorage.setItem("comentario", comentarioUsuario);
  });
  recomendacion.reset();
  resetear();
});

const enviarRecomendacion = document.querySelector("#btn-confirmar")
enviarRecomendacion.addEventListener("click", () => {
  obtenerDatosRecomendaciones();
});

function obtenerDatosRecomendaciones() {
  const recetaJSON = localStorage.getItem("recetaUsuario");
  const recetaJS = JSON.parse(recetaJSON);
  let titulo = recetaJS.title;
  let img = recetaJS.image;
  let link = recetaJS.spoonacularSourceUrl;

  const comentarioJSON = localStorage.getItem("comentario");
  const comentarioJS = JSON.parse(comentarioJSON);
  let comentario = comentarioJS

  const usuarioJSON = localStorage.getItem("datosUsuario");
  const usuarioJS = JSON.parse(usuarioJSON);
  let nombreUsuario = usuarioJS.nombre

  const DateTime = luxon.DateTime;
  const now = DateTime.now()
  const dia = now.toLocaleString(DateTime.DATE_SHORT)
  const hora = now.toLocaleString(DateTime.TIME_SIMPLE)
  const diaHora = "on "+dia+", at "+hora+"."
  console.log(diaHora)
  
  recetasRecomendados.push(new Recetasrecomendadas(titulo,comentario,img,link,nombreUsuario,diaHora));
  mostrarRecetas(recetasRecomendados);
  if (recetasRecomendados.length == 5) {
    recetasRecomendados.shift();
  }
  recomendacion.reset();
  resetear();
};

const cerrar = document.querySelector("#btn-cerrar");
cerrar.addEventListener("click", () => {
  resetear();
});

const aceptar = document.querySelector("#btn-whatsapp");
aceptar.addEventListener("click", () => {
  obtenerTelefono();
});

function obtenerTelefono() {
  const telefonoJSON = localStorage.getItem("datosUsuario");
  if (telefonoJSON) {
    const telefonoJS = JSON.parse(telefonoJSON);
    let telefono = telefonoJS.telefono;
    const confirmarTelefono = document.querySelector("#modal-confirmacion-whatsapp");
    confirmarTelefono.innerHTML = `
      <p>The phone you declared is: <strong class="strong">${telefono}</strong>. <br><br> Can you confirm that you want to receive your personalized recipe on WhatsApp for this number?</p>
      `;
    if (telefono === "" || telefono === null) {
      confirmarTelefono.innerHTML = `
        <p>You did not declare any phone number so we cannot send you the recipe to Whatsapp. If you want to be able to carry out this action, go back to the beginning, enter "Start" and declare your data.</p>
        `;
    }
  }
}

const enviarWpp = document.querySelector("#btn-aceptar-wpp");
enviarWpp.addEventListener("click", () => {
  let timerInterval;
  Swal.fire({
    title: "Sending recipes...",
    html: "",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
  resetear();
});
