//capturar los elementos con los que voy a interactuar

let botonGuardar = document.getElementById('guardar');
let inputTarea = document.getElementById('tarea');
let inputPrioridad = document.getElementById('prioridad');
let contadorTareas = 2;
let seccionTareas = document.querySelector('.pintar');





botonGuardar.addEventListener('click', capturarDatosUser);

function capturarDatosUser(event) {
    event.preventDefault();

    let tareas = inputTarea.value;
    let prioridades = inputPrioridad.value;

    if (tareas != "" && prioridades != "" && prioridades != "Selecciona una prioridad") {/* si ninguno de los dos campos estan vaciod */

        /*  console.log(nombre, aficion); //Con esto, la información que metes en el formulario se pinta en consola */

        const newTarea = {
            id: contadorTareas,
            tarea: tareas,
            prioridad: prioridades
        }

        saveTarea(newTarea);
        paintTarea(newTarea);
    } else {
        alert('Es obligatorio rellenar todos los campos');
    }

    inputTarea.value = "";
    inputPrioridad.value = "Selecciona una prioridad";
    contadorTareas++;

};

function paintTarea(pTarea) { /* PINTA UNA TAREA */

    let priorityColor = "";
    switch (pTarea.prioridad.toLowerCase()) {
        case "urgente":
            priorityColor = "#f52d2d";
            break;
        case "diaria":
            priorityColor = "#ffff00";
            break;
        case "mensual":
            priorityColor = "#00f3ff";
            break;
        default:
            break;
    }

    seccionTareas.innerHTML += `<div data-id="${pTarea.id}" id="tarea_${pTarea.id}" class="col-12 col-lg-12 navbar navbar-light" style="background-color: ${priorityColor}; width: 100%; border: 1px dotted black;">
  
    <nav class="navbar navbar-light">
    <p class="navbar-brand">${pTarea.tarea}</p>
    <p class="navbar-brand"> ${pTarea.prioridad} </p>
    <form class="form-inline">
    <a href="#" onclick="borrarTarea('tarea_${pTarea.id}')" class="btn btn-danger";>Eliminar</a>
    </form>
</nav>
</div>`}



function paintTareas(pListaTareas) { /* PINTA LA LISTA DE TAREAS */
    seccionTareas.innerHTML += "";

    pListaTareas.forEach(tarea => {
        paintTarea(tarea);
    });

}

function borrarTarea(pTareaBorrar) {
    let tareaBorrar = document.getElementById(pTareaBorrar); //primero capturo paraselecc que voy a borrar
    seccionTareas.removeChild(tareaBorrar);
    borrar(tareaBorrar.dataset.id); //para borrarlo del array

}

paintTareas(duties);



//FILTROS

//filtro por buscador 

let btnBuscarTarea = document.querySelector('#buscadordetarea');
let inputTareaXNombre = document.querySelector('#nombredetarea');


/* btnBuscarTarea.addEventListener('click', capturarBusquedaTareas); */

/* function capturarBusquedaTareas(event) {
    let nombreTarea = inputTareaXNombre.value.toLowerCase();

    console.log(nombreTarea);  //en consola se pinta 

    let listaFiltradaXTarea = buscarXNombreTarea(duties, nombreTarea);
    seccionTareas.innerHTML = "";
    paintTareas(listaFiltradaXTarea);
} */


//Filtro por prioridad. Consigo que me aparezcan las tareas que he filtrado pero no me desaparecen las otras 

let selectPrioridad = document.querySelector('#buscarPrioridad');

/* selectPrioridad.addEventListener('change', capturarPrioridad); */

/* function capturarPrioridad(event) {
    let prioridad = event.target.value;

    if (prioridad != "Selecciona una prioridad") {
        let listaFiltradaXPrioridad = filtrarXPrioridad(duties, prioridad);
        seccionTareas.innerHTML = "";
        paintTareas(listaFiltradaXPrioridad);
    } else {
        paintTareas(duties);
    }
    }
 */

//Junto ambos filtros

selectPrioridad.addEventListener('change', capturarPrioridadTarea);
btnBuscarTarea.addEventListener('click', capturarPrioridadTarea);
function capturarPrioridadTarea(event) {
    let prioridad = selectPrioridad.value;
    let nombreTarea = inputTareaXNombre.value.toLowerCase();

    if (prioridad != "Selecciona una prioridad") {
        let listaFiltradaXPrioridad = filtrarXPrioridad(duties, prioridad);
        let listaFiltradaXTarea = buscarXNombreTarea(listaFiltradaXPrioridad, nombreTarea);
        seccionTareas.innerHTML = "";
        paintTareas(listaFiltradaXTarea);
    } else {
        let listaFiltradaXTarea = buscarXNombreTarea(duties, nombreTarea);
        seccionTareas.innerHTML = "";
        paintTareas(listaFiltradaXTarea);
    }
}














