import { Persona, IPadreFamilia, ITrabajor } from './inherit';

export class Instructor extends Persona implements IPadreFamilia {
    name: string;
    lastname: string;
    grade: string;
    codigoEmpleado: string;
    asistente: ITrabajor;

    constructor(nombre: string, apellido: string, grado: string) {
        super(nombre, apellido);
        this.grade = grado
    }

    teach(): void {
        console.log('teach...');
    }

    asistirReunion(): void {
        console.log('asistir...');
    }
}

export class Student extends Persona implements IPadreFamilia {
    age: number;

    constructor(nombre: string, apellido: string, age: number) {
        super(nombre, apellido);
        this.age = age;
    }

    study(): void {
        console.log('study...');
    }

    asistirReunion(): void {
        console.log('asistir después de mi curso...');
    }
}