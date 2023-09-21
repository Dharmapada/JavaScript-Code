//For In

//Object
const games = {
    'game1' : 'PUBG',
    'game2' : 'FreeFire',
    'game3' : 'Mini Malitia',
    'game4' : 'LUDO'
}

for (const game in games) {
    console.log(game, games[game]);//game1 PUBG game2, FreeFire game3, Mini Malitia game4, LUDO
}


//Map
const countryNames = new Map();
countryNames.set('Ind' , "India")
countryNames.set('Eng', "England")
countryNames.set("Fr", "France")
countryNames.set('SL', 'Sri Lanka')

for (const name in countryNames) {
    console.log(countryNames[name]);
}
//NOTE :- Map is iterable so that for in loop can't work but not return any error.

//Array
const superHeros = ['Spider-man', 'Batman', 'Captan America', 'Thor']
for (const hero in superHeros) {
    console.log(hero);
    console.log(superHeros[hero]);
}


