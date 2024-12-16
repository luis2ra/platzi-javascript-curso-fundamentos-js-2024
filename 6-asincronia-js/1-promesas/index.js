/*

Promesas / Promises

Estados:
- pending
- fullfilled
- rejected

Callbacks:
- resolve
- reject

Metodos usados:
- then()
- catch()

*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // code here in a real scenario

        let operationSuccessful = true;
        if (operationSuccessful) {
            resolve("La operacion fue exitosa!");
        } else {
            reject("Fallo la operacion");
        }
    }, 2000);
});

promise
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });
