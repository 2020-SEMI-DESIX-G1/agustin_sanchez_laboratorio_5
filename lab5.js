var num1 = 10
var num2 = 5
console.log(`Suma: ${num1 + num2}`)
console.log(`Resta: ${num1 - num2}`)
console.log(`Multiplicacion: ${num1 * num2}`)
console.log(`Division: ${num1 / num2}`)

/* *************************************************************** */

let firstName = "Agustin"
let lastName = "Sanchez"
console.log(`Nombre completo: ${firstName} ${lastName}`)

/* *************************************************************** */


const a = true
const b = () => { console.log("hi") }
console.log(`type of 'a': ${typeof (a)}`)
console.log(`type of 'b': ${typeof (b)}`)


/* *************************************************************** */

const obj = {
    age: 23,
    id: "8-921-1852",
    married: false,
    pets: {}
}
console.log(`Objeto: ${JSON.stringify(obj)}`)

/* El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON*/