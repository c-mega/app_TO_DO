function saveTarea(pTarea) {
    duties.push(pTarea);
}

function borrar(pId) {
    let id = parseInt(pId);
    let posicionEliminar = duties.findIndex(duties => duties.id == id);

    duties.splice(posicionEliminar, 1);
}

function buscarXNombreTarea(pListaTareas, pDuty) {
    let listaXNombre = new Array();

    listaXNombre = pListaTareas.filter(duties => {
        let tareaDuties = duties.tarea.toLowerCase();
        return tareaDuties.includes(pDuty);
    })

    return listaXNombre;
}

function filtrarXPrioridad(pListaTareas, pPrioridad) {
    let listaXPrioridad = new Array();

    listaXPrioridad = pListaTareas.filter(duties => duties.prioridad == pPrioridad);

    return listaXPrioridad;
}