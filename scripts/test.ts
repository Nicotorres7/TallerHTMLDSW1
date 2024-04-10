// Ejemplos Javascript
// Tipos de datos primitivos
// autor: Rubby Casallas. Universidad de los Andes. Colombia. 2020.

// Tipo de datos string
// valor de un string: 

console.log('Hola Mundo');
 
// Comillas dobles
let tipoDato: string = "string";
console.log(tipoDato);

// Comillas sencillas
tipoDato = 'string';
console.log(tipoDato);
 
// Comillas dentro de comillas
let tagDiv = "<div class=\"panel\">...</div>";
console.log(tagDiv);

// Comillas simples con comillas dobles
tagDiv = '<div class="panel">...</div>';
console.log(tagDiv);

// Comillas invertidas o acento grave. Plantillas literales ES6

// Cadena de caracteres con salto de línea

console.log("esta es una primera línea y \nesta es una segunda línea ");

console.log(`esta es una primera línea y 
esta es una segunda línea `);

console.log("---------------------------------");
// Variables dentro de la cadena de texto 
console.log(`Tipos primitivos: ${tipoDato}`);

let nombre: string = 'Juan';
let apellido: string = 'Rulfo';

let nombreApellido: string = nombre + apellido;
console.log(nombreApellido);

nombreApellido = nombre + ' ' + apellido;
console.log(nombreApellido);

console.log(nombre.concat(apellido));

console.log(`longitud de nombreApellido ${nombreApellido.length}`);

console.log(`longitud de "${nombreApellido}" ${nombreApellido.length}`);

let sliceNombre: string = nombreApellido.slice(0, nombreApellido.indexOf(" "));

console.log(`Nombre en "${nombreApellido}" es "${sliceNombre}" `);

console.log(`Nombre en Mayusculas ${nombre.toUpperCase()}`);
// Lo mismo para Apellido 

// ---------------------------------------------
// Tipo de datos numéricos
console.log("---------------------------------");
tipoDato = 'number';
console.log(`Tipos primitivos: ${tipoDato}`);

// Valores numéricos literales

console.log(10);

console.log(3.14159);

let varNumerica: number = 10;
console.log(`varNumerica ${varNumerica}`);


let operando1: number = 20;
let operando2: number = 5;

operando1++;
console.log(`Incrementar ${operando1}`);

operando2--;
console.log(`Decrementar ${operando2}`);

operando1 -= 1;
console.log(`Asignación -= ${operando1}`);

operando2 += 1;
console.log(`Asignación += ${operando2}`);

// Operadores aritméticos binarios

let resultado: number = 0;

resultado = operando1 + operando2;
console.log(`Sumar: ${resultado}`);

resultado = operando1 - operando2;
console.log(`Restar:  ${resultado}`);

resultado = operando1 * operando2;
console.log(`Multiplicar: ${resultado}`);

resultado = operando1 / operando2;
console.log(`Dividir:   ${resultado}`);

resultado = operando1 % operando2;
console.log(`Residuo:  ${resultado}`);

let otroNumero: number = 10.34;

console.log(`Precisión 2 dígitos:   ${otroNumero.toPrecision(2)}`);
;
console.log(`Exponencial:  ${otroNumero.toExponential(2)}`);

// ---------------------------------------------
// Tipo de datos booleanos
console.log("---------------------------------");
tipoDato = 'boolean';
console.log(`Tipos primitivos: ${tipoDato}`);

// Valores boleanos literales

console.log(false);
console.log(true);

let estaEntendiendo: boolean = true;

console.log(`Está entendiendo, ${estaEntendiendo}`);

// Operadores lógicos

// Negación 
estaEntendiendo = !estaEntendiendo;
console.log(`Está entendiendo, ${estaEntendiendo}`);

let otroBooleano: boolean = true;
let resultadoBool: boolean;

// AND

resultadoBool = estaEntendiendo && otroBooleano;
console.log(`Resultado &&, ${resultadoBool}`);

// OR

resultadoBool = estaEntendiendo || otroBooleano;
console.log(`Resultado ||, ${resultadoBool}`);

// Operadores de Comparación
console.log('Operadores de Comparación');
console.log(`Igualdad ${operando1 == 24}`);

console.log(`Diferente ${operando1 == 24}`);

console.log(`Igualdad ${operando1 == 20}`);

console.log(`Mayor igual ${operando1 >= 20}`);

// Operador ternario
console.log('Operador ternario condición ? valor1 : valor2');

console.log(operando1 >= 20 ? operando1 : 20 - operando1);

operando1 = 15;

console.log(operando1 >= 20 ? operando1 : 20 - operando1);

 
console.log(operando1 >= 20 ? operando1 : `le falta ${20 - operando1} para 20`);

// Any, undefined, null

let varTipoDesconocido : any;  
console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido}`); 

varTipoDesconocido = true; // es un boolean
console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido}`); 
varTipoDesconocido = 5.56; // es un número
console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido}`); 

console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido} le calculamos toPrecision(1) ${varTipoDesconocido.toPrecision(1)}`); 
varTipoDesconocido = 'es una cadena'
console.log(`variable varTipoDesconocido cuyo valor es:  ${varTipoDesconocido}`); 

// varTipoDesconocido.toPrecision(1); // error en ejecución






// varVoid = 5;   error en compilación

let tipoDatoEstr : string ;

console.log('Tipo de datos: enumeraciones, arreglos y tuplas');
console.log("---------------------------------");
tipoDatoEstr = 'enum';
console.log(`Tipos primitivos: ${tipoDatoEstr}`);


// Declarar una enumeración

enum Continentes  {
    Americano = 1,
    Europa,
    Africa,
    Oceania,
}


let miContinente : Continentes = Continentes.Americano;


console.log(`Mi continente es ${miContinente}`); 

 miContinente  = Continentes.Oceania;

console.log(`Mi continente es ${miContinente}`);

console.log("---------------------------------");
tipoDatoEstr = 'arreglos';
console.log(`Tipos primitivos: ${tipoDatoEstr}`);

// Declarar un arreglo
let cuentas : Array<number> = [123.4,56.8,90.3];


let cuentas2 : number[] = [123.4,56.8,90.3];

console.log(`Las cuentas son : ${cuentas}`);

cuentas.push(34.6);

console.log(`Las cuentas son : [${cuentas}]`);

console.log(`EL número de elementos en las cuentas son : ${cuentas.length}`);

console.log(`El índice donde está el elemento "34.6" es: ${cuentas.indexOf(34.6)}`);

console.log("---------------------------------");
tipoDatoEstr = 'tuplas';
console.log(`Tipos primitivos: ${tipoDatoEstr}`);

// Declarar una tupla

let estudiante:[ number, string,  boolean] = [1, 'María Ramos',  true];

console.log(`El estudiante actual es ${estudiante}`);

console.log(`El estudiante actual es Nombre: ${estudiante[0]}, Id:${estudiante[1]}, Está activo: ${estudiante[2]? 'Sí': 'No'} `);

estudiante[2] = false;

console.log(`El estudiante actual es Nombre: ${estudiante[1]}, Id: ${estudiante[0]}, Está activo: ${estudiante[2]? 'Sí': 'No'} `);

let estudiantes:[ number, string,  boolean] []= [[1, 'María Ramos',  true]];

estudiante = estudiantes[0];
console.log(`El estudiante  ${estudiante[0]} es Nombre: ${estudiante[1]}, Está activo: ${estudiante[2]? 'Sí': 'No'} `);

estudiantes.push([2, 'Alba Avila',  false]);
estudiante = estudiantes[1];
console.log(`El estudiante ${estudiante[0]}  Nombre: ${estudiante[1]}, Está activo: ${estudiante[2]? 'Sí': 'No'} `);
console.log(`${estudiantes[1][1]}`);

console.log('Estructuras de control');
console.log('Estructuras de control condicionales');
// if ... else if ... else
enum Continente {
    Americano = 1,
    Europa,
    Africa,
    Oceania,
}

let unContinente: Continente = Continente.Americano;

if (unContinente == Continente.Americano) {
    console.log(`El continente es: Americano`)
} else if (unContinente == Continente.Africa) {
    console.log(`El continente es: Africa`)
} else if (unContinente == Continente.Europa) {
    console.log(`El continente es: Europa`)
} else if (unContinente == Continente.Oceania) {
    console.log(`El continente es: Oceania`)
} else {
    console.log(`El continente no está`)
}


console.log('Estructuras de control ciclos');



// while
let i: number = 0;
let suma: number = 0;
while (i < cuentas.length) {
    suma += cuentas[i];
    i++;
}
console.log(suma);
// for 
suma = 0;
for (let j: number = 0; j < cuentas.length; j++) {
    suma += cuentas[j];
}
console.log(suma);

//-----------

class Vehiculo {
    id: number;
    fabricante: string;
    modelo: string;
    anio: number;
    vin: string;
    constructor(id: number, fabricante: string, modelo: string, anio: number, vin: string) {
        this.id = id;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.anio = anio;
        this.vin = vin;
    }
    desplegar(): string {
        return ` 
        id: ${this.id}  
        fabricante: ${this.fabricante}
        modelo: ${this.modelo}
        año: ${this.anio}
        vin: ${this.vin}`;
    }
}

let vehiculos: Array<Vehiculo> = [new Vehiculo(1, 'Dodge', 'Grand Caravan', 1994, 'WBABN53452P672584'),
new Vehiculo(2, 'Buick', 'Coachbuilder', 1995, 'WAUWFAFR9AA954095'),
new Vehiculo(3, 'Volvo', 'XC70', 2008, 'WAUHGAFC0CN058717'),
new Vehiculo(4, 'Audi', 'S4', 2005, '1G4HR54K424671728'),
new Vehiculo(5, 'Mitsubishi', 'Montero Sport', 2002, '5TFCW5F1XBX047846'),
new Vehiculo(6, 'Honda', 'Accord', 2010, 'WBALZ5C54CC332269'),
new Vehiculo(7, 'Toyota', 'Prius', 2009, 'WVWAA7AJ3CW803789'),
new Vehiculo(8, 'Saab', '9-3', 2003, 'YV4612HM9F1029474'),
new Vehiculo(9, 'Jaguar', 'X-Type', 2002, 'WBANW5C50AC270660'),
new Vehiculo(10, 'Volkswagen', 'Passat', 1986, 'WBA3A5C5XDJ866431')];

console.log(`Total vehículos: ${vehiculos.length}`);

for (let i: number = 0; i < vehiculos.length; i++) {
    console.log(vehiculos[i].desplegar());
}
