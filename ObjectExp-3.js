const user = new Object();//Singletone Object
console.log(user);

const user2 = {};        //Non-Singletone Object
console.log(user2);


//--------------------------------------------------------------
//MERGE TWO OBJECT

const obj1 = {1:"abc", 2:"def", 3:"ghi"}
const obj2 = {4:"jkl", 5:"mno", 6:"pqr"}

const obj3 = obj1 + obj2;
console.log(obj3);//[object Object][object Object]

const obj4 = {obj1 , obj2}
console.log(obj4);//{obj1: { '1': 'abc', '2': 'def', '3': 'ghi' },obj2: { '4': 'jkl', '5': 'mno', '6': 'pqr' }}

console.log("----------------------USING OBJECT.ASSIGN()---------------------");
const obj5 = Object.assign(obj1 , obj2);
console.log(obj5);//{'1': 'abc','2': 'def','3': 'ghi','4': 'jkl','5': 'mno','6': 'pqr'}
console.log(obj5 === obj1);

const obj6 = Object.assign({} , obj1 , obj2);
console.log(obj6);//{'1': 'abc','2': 'def','3': 'ghi','4': 'jkl','5': 'mno','6': 'pqr'}

console.log(obj1);//{'1': 'abc','2': 'def','3': 'ghi','4': 'jkl','5': 'mno','6': 'pqr'}


/*When we use "Object.assign()" , it will take first parameter as 'Target' and 
second as 'Source' . So it will merge 'Source' value in 'Target'*/


//===================================================================================
console.log("-----------------------USING SPREAD---------------------------");
const objOne = {1:"abc", 2:"def", 3:"ghi"}
const objTwo = {4:"jkl", 5:"mno", 6:"pqr"}
const obj7 = {...objOne , ...objTwo}
console.log(obj7);


/* We can merge two object using spread*/
 
