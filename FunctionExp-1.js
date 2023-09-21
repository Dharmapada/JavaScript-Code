function addTwoNumbers(num1, num2){
    return num1+num2;
}

const result = addTwoNumbers(3, 7);
console.log(result);

console.log("---------------------------------------------------");

console.log(addTwoNumbers(8, null), typeof addTwoNumbers(8, null));

console.log("---------------------------------------------------");

console.log(addTwoNumbers(8, "4"), typeof addTwoNumbers(8, "4"));

console.log("---------------------------------------------------");

function printOutput(name) {
    if(name === undefined){
        return "Parameter should not empty."
    }
    // if((typeof name ) === Number){
    //     return "Please enter a String Value not Number."
    // }
    return `Hello my name is ${name}.`
}
console.log(printOutput(6));