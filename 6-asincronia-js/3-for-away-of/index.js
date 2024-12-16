/*

Async & Await

*/

const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {
    try {
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            // console.log(data.results);
        }
    } catch (error) {
        console.log(error);
    }
}
// se ejecuta la funcion "fetchNewData()" en la consola del navegador para ver el resultado


// Otra opcion recomendada en los comentarios de la clase 48 (revisarlo xq no funciona)
async function obtenerResultados() {
    const promesas = urls.map(url => fetch(url).then(res => res.json()));
    const resultados = await Promise.all(promesas);
}
