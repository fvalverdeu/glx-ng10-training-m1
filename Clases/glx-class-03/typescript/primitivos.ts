/**
 * TIPOS DE DATOS PRIMITIVOS
 */

 var firstname: string = 'Fernando';
 var lastName: string = "Valverde";
 var middleName: string = `Manuel`;
 var age: number = 36;
 var isSingle: boolean = false;
 var car: string;
 var work: string = null;

 console.log(car);
 console.log(typeof work);

// funciones de cadena 
var message = ' todas las frutas: naranja, pera, mango ';
console.log(message.length);
console.log(message.trim().length);
console.log(message.replace('naranja','fresa'));

// estructuras de control
var theNumber = 40;
if (theNumber - 40) {
    console.log('esto no dio cero')
} else {
    console.log('esto dio cero')
}
var result = ''
var myName = true;
// if (myName) {
//     result = 'te conozco';
// } else {
//     result = 'no te conozco';
// }

// result = condicion ? valor-si-es-true : valor-si-es-false
result = myName ? 'te conozco' : 'no te conozco';
console.log(result);


let value = 2;

switch (value) {
    case 1:
        console.log('seteado en 1');
        break;
    case 2:
        console.log('seteado en 2');
        break;
    case 3:
        console.log('seteado en 3');
        break;
    default:
        break;
}

