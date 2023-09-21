/*This :-
==========
 -> default value of this is 'empty object{}' in node and 'window object' in browser.

*/


const data = {
    name: "Gautami",
    age: 25,
    address: function () {
        addr = "Hyderabad, Telengana, India"
        console.log(this);//Here, this refer to whole data
        return `I'm ${this.name}, my age is ${this.age}, and my address is ${addr}.`
    }
}

console.log(data.address());
console.log(this);//Here, this refer to default value means empty object.

console.log("-------------------------------------------------------------");

function fun(){
    console.log(this);
}
fun();