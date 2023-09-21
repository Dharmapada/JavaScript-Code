// For of

const data = [1, 2, 3, 4, 5, 6]

for (const i of data) {
    console.log(i);
}


const valueOfData = "Hello, Welcome to JavaScript!"
for (const i of valueOfData) {
    console.log(i);
}



// Map

const countryName = new Map();
countryName.set('Ind' , "India")
countryName.set('Eng', "England")
countryName.set("Fr", "France")
countryName.set('SL', 'Sri Lanka')
//NOTE :- Map doesn't allow duplicate value.

console.log(countryName);


for (const value of countryName) {
    console.log(value);//[ 'Ind', 'India' ],[ 'Eng', 'England' ],[ 'Fr', 'France' ],[ 'SL', 'Sri Lanka',

}

for (const [key , value] of countryName) {
    console.log(key);
    console.log(value);
    console.log(key ,' standa for - ',value);
}


//Object
const games = {
    'game1' : 'PUBG',
    'game2' : 'FreeFire',
    'game3' : 'Mini Malitia',
    'game4' : 'LUDO'
}
for (const game of games) {
    console.log(game);//TypeError: games is not iterable
}
//NOTE :- Object is not iterable so that we can't perform ForOf loop but return TypeError.
