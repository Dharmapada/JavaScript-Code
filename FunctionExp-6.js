function chai(){
    let username = "USER1";
    console.log(this.username);
    console.log(arguments);
}
chai()
chai(1,2,3,4,5,6,7,8,9,0)

const chai2 = function() {
    let username = "USER2";
    console.log(this.username);
}
chai2()

const chai3 = () => {
    let username = "USER3";
    console.log(this.username);
}
chai3()

const chai4 = (a , b) => a + b; // Implicit Return
console.log(chai4(8,9));

/* 
   DEFFERENCE BETWEEN REGULAR FUNCTION AND ARROW FUNCTION
   ======================================================
   ->Syntax
   ->No arguments (arguments are array-like objects)
   ->No prototype object for the Arrow function
   ->Cannot be invoked with a new keyword (Not a constructor function)
   ->No own this (call, apply & bind won't work as expected)
   ->It cannot be used as a Generator function
   ->Duplicate-named parameters are not allowed
*/