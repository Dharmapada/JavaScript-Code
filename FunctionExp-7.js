const chai = () => {
    let username = "USER3";
    console.log(this.username);
}
chai()

const chai2 = (a , b) => a + b; // Implicit Return
console.log(chai2(8,9));

const chai3 = (a , b) => (a * b); // Implicit Return
console.log(chai3(12 , 11));

const chai4 = (a , b) => ({username : "Soham"});//Implicit Return with Object as return value
console.log(chai4());
