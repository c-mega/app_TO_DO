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

    if (tareas.trim() != "" && prioridades.trim() != "") {/* si ninguno de los dos campos estan vaciod */

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
    inputPrioridad.value = "";
    contadorTareas++;

};

function paintTarea(pTarea) { /* PINTA UNA TAREA */

    let priorityColor = "";
    switch (pTarea.prioridad.toLowerCase()) {
        case "urgente":
            priorityColor = "red";
            break;
        case "diaria":
            priorityColor = "yellow";
            break;
        case "mensual":
            priorityColor = "green";
            break;
        default:
            break;
    }

    seccionTareas.innerHTML += `<div data-id="${pTarea.id}" id="tarea_${pTarea.id}" class="card mb-3" style="background-color: ${priorityColor}">
    <div class="row">
        <div class="col-9">
            <div class="card-body">
                <p class="card-text">${pTarea.tarea}</p>
                <p class="card-text">${pTarea.prioridad}</p>
            </div>
        </div>
        <div class="col-3">
            <a href="#" onclick="borrarTarea('tarea_${pTarea.id}')" class="btn btn-danger"
                style="float: right;">Eliminar</a>
        </div>
    </div>
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

//filtro buscador 

let btnBuscarTarea = document.querySelector('#buscadordetarea');
let inputTareaXNombre = document.querySelector('#nombredetarea');


btnBuscarTarea.addEventListener('click', capturarBusquedaTareas);

function capturarBusquedaTareas(event) {
    let nombreTarea = inputTareaXNombre.value.toLowerCase();

    /* console.log(nombreTarea); */  //en consola se pinta 

    let listaFiltradaXTarea = buscarXNombreTarea(duties, tarea);
    paintTareas(listaFiltradaXTarea);
}


//Filtro por prioridad. Consigo que me aparezcan las tareas que he filtrado pero no me desaparecen las otras 

let selectPrioridad = document.querySelector('#buscarPrioridad');

selectPrioridad.addEventListener('change', capturarPrioridad);

function capturarPrioridad(event) {
    let prioridad = event.target.value;

    let listaFiltradaXPrioridad = filtrarXPrioridad(duties, prioridad);
    seccionTareas.innerHTML = "";
    paintTareas(listaFiltradaXPrioridad);
    console.log(listaFiltradaXPrioridad);

}













