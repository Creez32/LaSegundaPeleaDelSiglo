let fs = require('fs')
let tareas = require('./tareas.json')

let funciones  = {
    listar : tareas,
    listarFor : () => tareas.forEach(tarea => {
        return tarea
    })
}

module.exports = funciones