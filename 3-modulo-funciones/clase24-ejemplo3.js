// clase Arrow function y enlace léxico - ejemplo 3

const userPoints = 150;

function checkAccess() {
    if (userPoints < 100) {
        const message = "Access denied: Insufficient points!";
        return message;
    } else {
        const message = "Access granted: Enjoy the premium features!";
        return message;
    }
}

console.log(checkAccess());
