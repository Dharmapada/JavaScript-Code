/* IIFE - IMMEDIATILY INVOKED FUNCTION EXPRESSIONS
   ===============================================
   ->JavaScript function that runs as soon as it is defined.
   ->To avoid global polution we use IIFE
   ->To declare IIFE we can use Two bracker like ;- ()()
     In first bracket () write a function and make second as empty. 
*/

function chai2() {
    console.log("Hello IIFE 2!!!");
}
chai2(); // This is the Regular function call


//This type of declaration of IIFE called as 'named IIFE'.
(function chai() {
    console.log("Hello IIFE !!!");
})();//Make sure after end of each IIFE we should declare a semicolon for end the line.


//This type of declaration of IIFE called as 'Unnamed IIFE'.
(() => {
    console.log(`Hello IIFE. I'm a arrow function.`);
})();

//pass argument with IIFE
((value) => {
    console.log(`Hello, I'm ${value}`);
})('Anulipsa')

