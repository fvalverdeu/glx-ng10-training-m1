"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
var instructor1 = new class_1.Instructor('José', 'Pérez', 'Magister');
var student1 = new class_1.Student('José', 'Pérez', 25);
var student2 = new class_1.Student('José', 'Pérez', 30);
instructor1.goToSchool();
student1.goToSchool();
student2.goToSchool();
instructor1.teach();
student1.study();
student2.study();