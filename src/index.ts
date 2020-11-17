/**EJERCICIOS TEMA 2 LENGUAJES */

/*Implementa una función head (inmutable), tal que, dado un array 
 *como entrada extraiga y devuelva su primer elemento. Uliza destructuring.*/ 

const transportsA = ["bus" ,"coche" ,"moto" ,"bici", "patinete"]

console.log('Array transportsA: ' , transportsA);
console.log("**********************************");

const head = ([primero, ]: string[])  => primero;


console.log('Primer elemento: ', head(transportsA));
console.log("**********************************");


/**Implementa una función tail (inmutable), tal que, dado un array como 
 *entradadevuelta todos menos el primer elemento. Uliza rest operator.*/

const tail = ([, ...todosMenosElPrimero]) => todosMenosElPrimero;

console.log('Todos los elementos menos el primero: ', tail(transportsA));
console.log("**********************************");


/**Implementa una función init (inmutable), tal que, dado un array como entrada devuelva 
 * todos los elementos menos el último. Uliza los métodos que ofreceArray.prototype. */

 const init = arrayTransports => {
    console.log("Eliminamos el último elemento: ", [arrayTransports.pop()]);
    return arrayTransports; 
};


/** Ahora el array contiene solo 4 objetos ["bus" ,"coche" ,"moto, "bici"]*/

console.log("El array transportsA tiene ahora 4 objetos : ", init(transportsA));
console.log("**********************************");


/**Implementa una función last (inmutable), tal que, dado un array como entrada devuelva 
 * el último elemento. */

const last = arrayTransports =>  [arrayTransports.pop()];

// const last = ([...firstElements, lastElement]) => lastElement;  ?????????????????????????????????????????????????????????????????????????????????????????????????


console.log("Ahora le quitamos el último elemento al array transportsA usando de nuevo .pop(), en este caso sería el elemento:  ", last(transportsA))
console.log("Por lo que nos dejará el array transportA con solo tres elementos: ", transportsA);
console.log("**********************************");

const transportsB = ["barco", "lancha", "moto de agua", "yate"];

console.log("Nos dan un nuevo array llamado transportsB: " , transportsB);
console.log("**********************************");


/** Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,devuelva 
 *  la concatenación de ambos. Uliza rest / spread operators 
 */

const concat = ( arrayA, arrayB) => [...arrayA, ...arrayB];

console.log("Concatenación de array 'transportsA': " , [...transportsA] , " y array 'transportsB': " , [...transportsB], "Resultado: " , concat(transportsA, transportsB) );
console.log("**********************************");


/** Implementa una versión del ejercicio anterior donde se acepten múltiples arrays deentrada (más de 2).
 * 
 */

const transportsC = ["avión", "globo aerostático", "helicóptero" ];
const transportsD = ["tren", "tranvía", "AVE"]

console.log("Creamos dos arrays nuevos, transportsC: " , [...transportsC]  );
console.log("Y transportsD: " , [...transportsD]);

const concatAny = (...any) => [...any];

console.log("La función concatAny acepta un número indefinido de argumentos, en este caso le pasaremos los cuatro arrays creados: ",transportsA,transportsB,transportsC,transportsD );
console.log( "Resultado: " , (concatAny(transportsA + "," + transportsB + "," + transportsC + "," + transportsD )));
console.log("**********************************");


/**Implementa una función clone que, a partir del objeto de entrada source devuelva un nuevo objeto con las mismas propiedades: */

const obj1 = {
    puertas: 4,
    ventanas: 4,
    motor: 1,
    ruedas: 4,
}

console.log("Creamos el objeto obj1: " , obj1);

const clone = source => ({...source});
    
console.log("Y de nuevo creamos un objeto, pero este a partir de obj ", clone(obj1));
console.log("**********************************");   


/**Implementa una función merge que, dados dos objetos de entrada source y target,devuelva un nuevo objeto con todas las propiedades de target y 
 * de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target. */

const obj2 = {
    puertas: 2,
    ventanas: 2,
    motor: 2,
    tubosDeEscape: 2,
    extras: "si",
    ruedas: 2,
}

console.log("Ahora creamos el objeto obj2, que tiene dos elementos nuevos (tubosDeEscape y extras): ", obj2)

const merge = (source, target) => ({...target, ...source});

console.log("El resultado de hacer merge de dos objetos respetando los elementos del primero, y añadiendo los elementos del segundo es: ", merge(obj1, obj2));
console.log("**********************************");   


/**Crea una función isBookRead que reciba una lista de libros y un titulo y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como
*  string y isRead como booleano. En caso de no existir el libro devolver false */


/**Opcional
* Uliza Typescript para añadir los tipos adecuados. */ 

interface Book {
    title: string;
    isRead: boolean;
} 

const library: Array<Book> = [];


library.push(
    {title: "El señor de los anillos", isRead: true},
    {title: "Los pilares de la tierra", isRead: true},
    {title: "El código Da Vinci", isRead: true},
    {title: "El Hobbit", isRead: false},
    {title: "Fariñas", isRead: true}
);    

console.log("Array library: ", ...library); 

console.log("Ahora filtramos todos los libros del array por su propiedad isRead: ");


const isBookread = (books, anyTitle)  => {
    return books.some(book => (book.title === anyTitle && book.isRead === true), console.log(anyTitle));
} 
        

console.log(isBookread(library, "El señor de los anillos"));                // true, está en la lista y leído.  
console.log(isBookread(library, "El asesinato de PLatón"));                 // false, no está en la lista.  
console.log(isBookread(library, "Los pilares de la tierra"));               // true, está en la lista y leído.
console.log(isBookread(library, "El código Da Vinci"));                     // true, está en la lista y leído.
console.log(isBookread(library, "El Hobbit"));                              // false, está en la lista, pero no se ha leído. 
console.log(isBookread(library, "Fariñas"));                                // true, está en la lista y leído. 
console.log(isBookread(library,"La rebelión de las masas"));                // false, no está en la lista.
console.log("**********************************");   


/**El objevo de este ejercicio es crear una máquina tragaperras ulizando clases donde cada vez que juguemos insertemos una moneda. 
 * Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
 * Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que 
 * representarán el estado de las 3 ruletas. 
 * El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
 * "Congratulations!!!. You won <número de monedas> coins!!"y reiniciar las monedas almacenadas, ya que las hemos conseguido y han
 * salido de la máquina.
 * En caso contrario deberá mostrar otro mensaje:"Good luck next time!!". 
*/

class SlotMachine {
    
    container: number;

    constructor() {
        this.container = 0;
    }

    getRandom() {
        return  Math.random() < 0.5 ;
    }
    
    getResult() {

        if (this.getRandom() && this.getRandom() && this.getRandom()){

            console.log(`Felicidades!!! Has ganado ${this.container} monedas`);
            this.container = 0;

        } else  {
            this.container ++;
            console.log("Has perdido, sigue intentándolo. ");
            console.log(`Bote: ${this.container}`);
            
        }
    }

    play() {
        this.getResult();
    }
}



const maquina1 = new SlotMachine();

maquina1.play();
maquina1.play();


