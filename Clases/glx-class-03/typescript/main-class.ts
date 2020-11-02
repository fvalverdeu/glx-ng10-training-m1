import { Instructor, Student } from './class';

let instructor1 = new Instructor('José', 'Pérez', 'Magister');
let student1 = new Student('José', 'Pérez', 25);
let student2 = new Student('José', 'Pérez', 30);


instructor1.goToSchool();
student1.goToSchool();
student2.goToSchool();

instructor1.teach();
student1.study();
student2.study();