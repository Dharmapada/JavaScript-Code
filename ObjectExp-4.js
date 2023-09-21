//OBJECT DE-STRUCTURE EXAMPLE

const student = {
    name : "Gaurahari",
    stream : "SC",
    cource : "Java",
    institute : "IIT Dilhi"
}

console.log(student.institute);
//---------------------------------------------------
const {institute} = student;
console.log(institute);
//---------------------------------------------------
const {institute:alumini} = student;
console.log(alumini);