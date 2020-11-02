console.log('hello world!!');

interface IPersona {
    nombre: string;
    apellido: string;
}

function saludar(persona: IPersona) {
    console.log('Hola ' + persona.nombre);
}

var persona = {
    nombre: 'Fernandooooo',
    apellido: 'Valverde'
}

saludar(persona);