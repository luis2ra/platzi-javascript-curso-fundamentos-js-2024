// clase Arrow function y enlace léxico - ejemplo 4

const globalVariable = '🌍';

function localOne() {
    console.log('GLOBAL 1: ', globalVariable);
    // Note: localVariable is not defined here.
    // console.log('LOCAL 1 :', localVariable)

    function localTwo() {
        const carrot = '🥕';
        console.log('LOCAL 2: ', carrot);
    }

    function localThree() {
        // Note: carrot is not defined in this scope.
        console.log('LOCAL 3: ', carrot);
    }

    localTwo();
    localThree();
}

console.log(localOne());
