export class Persona {
    name: string; 
    lastname: string;

    constructor(nombre: string, apellido: string) {
        this.name = nombre;
        this.lastname = apellido;
    }

    goToSchool(): void {
        console.log('go to school...');
    }
}

export interface IPadreFamilia {
    asistirReunion();
}

export interface ITrabajor {
    codigoEmpleado: string;
}