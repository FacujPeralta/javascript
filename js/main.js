/*
-Cuando hablamos de una variable, hablamos de un dato 
 almacenado en nuestro programa.

-Se compone de 3 datos importante 
    1- Nombre 
    2- Valores = tipo de dato
    3- Dirección de memoria = memoria ram, volatil 
 
-Maneras de declarar variables
reglas: 
        -Todas las variables inician con una letra minuscula, por ejemplo de edad
               var edad = "18";
        -Se usan letras mayuscula cuando hay dos palabras ej:
               var miEdad = "18";
        -KeySensitive = miVariable =/= mivariable (Las toma como dos variables diferentes por la mayusculas.)
        -
*/ 

//desclaración de variables - no se usa más la palabra VAR
var nombre = "Facundo";
console.log(nombre);
/*let apellido = "Peratla";
console.log = apellido;

Valores que se usan hoy en día LET y CONST
var no se utiliza más porque se usa en todos los ambitos
en cambio LET Y CONST son "más fácil de controlar"
*/
let edad = 26;
console.log(edad);

const MI_CONSTANTE = "constante";
console.log(MI_CONSTANTE);


//DECLARACIÓN DE VARIABLE
let miNombre;

//INICIALIZACIÓN DE VARIABLE
miNombre = "Facundo";
// number acepta enteros y decimales, los decimales se escriben con punto
let numbre = 30;

//booleanos
let boolean = true;
// string = tipo de datos en cadenas

//Datos de tipo null = Lo utilizamos para representar un tipo de datos de manera intencional.
let dato = null;

//undefined = representa la falta de un valor asignado
let datoDos = undefined;

/*Operaciones aritmetica dentro de JS
    -SUMA 
    -RESTA
    -MULTIPLICACION
    -DIVISION
*/
//SUMA
let a = 5;
let b = 2;

let c = a + 5;
console.log(c);

//RESTA
let d, e;
d = 2-1; 
console.log(d);
e = 85 - 45;
console.log(e)

//DIVISIONES
let f, g;
f = 6 / 2;
console.log(f);
g = 8 /4;

console.log(g);
//MULTIPLICACION

let h;
h = 2 * 3;
console.log(h);

//PORSENTAJE
i = 7 % 2;
console.log(i);

//POTENCIA
j = 2 ** 3;

console.log(j);

//CONCATENAR EJ DOS STRING

let nombre1 = "Facundo";
let apellido1 = "Peratla";
let espacio = " "
let final = nombre1 + " "+ apellido1;
console.log(final);

let ingresoNombre = prompt("ingresa tu nombre");
let ingresaApellido = prompt("ingresa tu apellido");

let nombreCompleto = ingresoNombre +" "+ ingresaApellido;
alert(nombreCompleto);

