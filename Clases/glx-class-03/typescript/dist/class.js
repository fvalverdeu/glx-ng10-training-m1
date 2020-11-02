"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Instructor = void 0;
var inherit_1 = require("./inherit");
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(nombre, apellido, grado) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.grade = grado;
        return _this;
    }
    Instructor.prototype.teach = function () {
        console.log('teach...');
    };
    Instructor.prototype.asistirReunion = function () {
        console.log('asistir...');
    };
    return Instructor;
}(inherit_1.Persona));
exports.Instructor = Instructor;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(nombre, apellido, age) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.age = age;
        return _this;
    }
    Student.prototype.study = function () {
        console.log('study...');
    };
    Student.prototype.asistirReunion = function () {
        console.log('asistir después de mi curso...');
    };
    return Student;
}(inherit_1.Persona));
exports.Student = Student;
