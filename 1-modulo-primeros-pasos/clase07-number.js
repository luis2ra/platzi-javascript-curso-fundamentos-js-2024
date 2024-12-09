// 1. Tipo entero y decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. Notación científica
const cientifico = 5e3;
console.log(typeof cientifico);

// 3. Infinitos y NaN
const infinito = Infinity;
const noEsUnNumero = NaN;
console.log(typeof infinito, typeof noEsUnNumero);


// Operaciones aritméticas

// 1. Suma, Resta, Multiplicación y División
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion = 4 * 7;
const division = 16 / 2;

// 2. Módulo y Exponenciación
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

// Precisión (Observación: La precisión de los números de punto flotante puede variar)
const resultado = 0.1 + 0.2;
console.log(resultado); // Puede ser algo como 0.30000000000000004
console.log(resultado.toFixed(1)); // Redondea a un decimal: 0.3
console.log(resultado === 0.3); // Falso debido a la precisión de punto flotante

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const aleatorio = Math.random();
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);