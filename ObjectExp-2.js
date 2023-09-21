

const user = {
    name : "V Kartikeya",
    position : "Executive Manager",
    message : "Hello"
}


user.message = function () {
    console.log("Hello, I'm V Kartikeya.");
}

console.log(user.message);
console.log(user.message());



//-----------------------------------------------------------------------

user.messageTwo = function() {
    console.log(`Hello my name is ${this.name}`);   
}

console.log(user.messageTwo);
console.log(user.messageTwo());