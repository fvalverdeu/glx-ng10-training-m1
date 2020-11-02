"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.name = nombre;
        this.lastname = apellido;
    }
    Persona.prototype.goToSchool = function () {
        console.log('go to school...');
    };
    return Persona;
}());
exports.Persona = Persona;
