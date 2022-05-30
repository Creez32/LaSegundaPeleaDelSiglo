let { argv } = require("process")
let suma = require("./suma");
let resta = require("./resta");

let num1 = +argv[3];
let num2 = +argv[4];
switch (argv[2]) {
    case "suma":
        console.log(suma())
        break;
    case "resta":
        console.log(resta())
        break
    default:
        break;
}