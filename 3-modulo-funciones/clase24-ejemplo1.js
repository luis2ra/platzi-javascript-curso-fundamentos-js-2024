// clase Arrow function y enlace léxico - ejemplo 1

const productName = 'Smartphone';
const price = 499;
const brand = 'TechCo';

function getProductDetails () {
    const productName = 'Laptop';
    const price = 899;

    return `The ${productName} costs $${price} and is from the brand ${brand}.`;
}

console.log(getProductDetails());
