/*

for in ---> objetos 

propiedades = valor

Es distinto a:

array, string

item

for (varible in objeto) {
  código
}

*/

const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

// imprime las propiedades
for (fruta in listaDeCompras) {
  console.log(fruta);
}

// imprime el valor de las propiedades
for (fruta in listaDeCompras) {
  console.log(listaDeCompras[`${fruta}`]);
}

// imprime el valor de las propiedades - otra forma
for (fruta in listaDeCompras) {
  console.log(`${listaDeCompras[fruta]}`);
}

// imprime la propiedad con su valor
for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

// genera este error:
// ReferenceError: listaDeCompras is not defined
for (fruta of listaDeCompras) {
  console.log(fruta);
}
