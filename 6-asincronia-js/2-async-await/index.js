/*

Async & Await

*/

// Prueba 1: usando promesa
function fetchData1() {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}
// se ejecuta la funcion "fetchData1()" en la consola del navegador para ver el resultado


// Prueba 2: usando async&await
async function fetchData2() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// se ejecuta la funcion "fetchData2()" en la consola del navegador para ver el resultado