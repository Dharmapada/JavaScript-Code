function printerFunction(num1) {
    return num1;
}

console.log(printerFunction(200, 400, 600, 800));

console.log("------------------------------------------------");

function printerFunction2(...num) {
    return num;
}

console.log(printerFunction2(200, 400, 600, 800));

console.log("------------------------------------------------");

function printerFunction3(n1, n2, ...num) {
    return num;
}

console.log(printerFunction3(200, 400, 600, 800));