/**
 * COMPUESTOS
 */
// Array
var arrayFruits = ['naranja', 'pera', 'fresa'];
console.log(arrayFruits.length);
arrayFruits.map(function (element) { return console.log(element); });
console.log(arrayFruits.splice(1, 2));
console.log(arrayFruits);
// Object
var person = {
    nombre: 'Elon',
    apellido: 'Musk'
};
console.log(person);
console.table(person);
console.log(typeof person);
// Clases
//  @Component()
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var componente1 = new Component();
componente1.template = "\n    <h1>Componente</h1>\n    <div>Esto es un componente</div>\n ";
componente1.style = "\n    {\n        color: red;\n    }\n ";
