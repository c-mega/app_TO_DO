function saveTarea(pTarea) {
    duties.push(pTarea);
}

function borrar(pId) {
    let id = parseInt(pId);
    let posicionEliminar = duties.findIndex(duties => duties.id == id);

    duties.splice(posicionEliminar, 1);
}



//Funcion filtrar por prioridad
function filtrarXPrioridad(pListaTareas, pPrioridad) {
    let listaXPrioridad = new Array();

    listaXPrioridad = pListaTareas.filter(duties => duties.prioridad == pPrioridad);

    return listaXPrioridad;
}

//Funcion buscador por nombre
function buscarXNombreTarea(pListaTareas, pTarea) {
    let listaFiltrada = new Array();
    listaFiltrada = pListaTareas.filter(duty => {
        let nombreTarea = duty.tarea.toLowerCase();
        return nombreTarea.includes(pTarea);
    })

    return listaFiltrada;
}