function saveTarea(pTarea) {
    tarea.push(pTarea);
}

function borrar(pId) {
    let id = parseInt(pId);
    let posicionEliminar = tarea.findIndex(tarea => tarea.id == id);

    tarea.splice(posicionEliminar, 1);
}