const scoreDolphins = ( 97 + 112 + 18) / 3;
const scoreKoalas = (  109 + 95 + 86) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas &&  scoreDolphins >=  100) {
    console.log ('Dolphins win');
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koals win');
    if(scoreDolphins === scoreKoalas && 100)
    console.log('Draw');
} else {
    console.log('Nobody wins');
}