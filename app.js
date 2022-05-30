const process = require('process');
let funcionesDeTareas = require('./funcionesDeTareas')

switch (process.argv[2]) {
    case "listar":
        funcionesDeTareas.listar
        break;

    default:
        break;
}