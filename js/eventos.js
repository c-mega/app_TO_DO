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

    /*  console.log(tareas, prioridades); */ //1ªcomprobación. Se pintan los resultados en la consola

    const newTarea = {
        id: contadorTareas,
        tarea: tareas,
        prioridad: prioridades
    }

    //esta función se encuentra declarada en funciones.js, al no estar en el front
    saveTarea(newTarea);

    //esta función se queda en eventos.js, porque trabaja con la interfaz
    paintTarea(newTarea);

    //para vaciar los campos una vez metido un resultado
    inputTarea.value = "";
    inputPrioridad.value = "";
    contadorTareas++;
}




function paintTarea(pTarea) {
    seccionTareas.innerHTML += `<div data-id="${pTarea.id}" id="tarea_${pTarea.id}" class="card mb-3">
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

function paintTareas(pListaTareas) {
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


paintTareas(tarea);

