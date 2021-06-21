// Les fonctions d'ordre supérieur des tableaux

const arr = [1,2,3,4,5,6,7,8,9];








// .map()

const mapArr = arr.map(x => { return x + 10 });
console.log(mapArr); // retourne (9) [11, 12, 13, 14, 15, 16, 17, 18, 19]











// .filter()

const filterArr = arr.filter(num => { return num > 2 });
console.log(filterArr); // retourne (7) [3, 4, 5, 6, 7, 8, 9]











// .forEach()

arr.forEach(val => {
    console.log(val - 1);
});
/* 
retourne 
0
1
2
3
4
5
6
7
8
*/

// on va pas les faire toutes mais, il y encore d'autre fonctions d'ordre supérieur des tableaux

