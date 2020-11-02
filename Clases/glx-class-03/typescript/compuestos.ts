/**
 * COMPUESTOS
 */

 // Array
 const arrayFruits = ['naranja', 'pera', 'fresa'];

 console.log(arrayFruits.length);
 arrayFruits.map(element => console.log(element));
 console.log(arrayFruits.splice(1,2));
 console.log(arrayFruits);
 
 // Object
 const person: IPersona = {
     nombre: 'Elon',
     apellido: 'Musk'
 }
 console.log(person);
 console.table(person);

 console.log(typeof person)

 // Clases
//  @Component()
 class Component {
     template: string;
     style: string;
     classComp: object;
 }

 let componente1 = new Component();

 componente1.template = `
    <h1>Componente</h1>
    <div>Esto es un componente</div>
 `;

 componente1.style = `
    {
        color: red;
    }
 `