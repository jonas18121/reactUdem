// Les fonctions pure

/* 
Une fonction pure, est une fonction qui retourne tout le temps la même chose si on lui passe tout le temps les même arguments 
et qui ne touche pas à un environnement extérieur, tous va ce passé dans la fonction
il n'y aura pas d'effect secondaire  l'extérieure de la fonction
*/




/* 
Fonction inpure
car il touche a un environnement exterieur à la fonction qui est let x = 2;
et si on appel add1(2) plusieur fois avec le même argument, il ne va pas retourner la même réponse parce qu'il rajoute dans le x
*/
console.log('Fonction inpure');

let x = 2;

const add1 = (y) => { return x += y };

console.log(add1(2)); // retourne 4
console.log(add1(2)); // retourne 6
console.log(add1(2)); // retourne 8
console.log(add1(2)); // retourne 10



/* 
fonction pure
car il ne touche pas a un environnement exterieur à la fonction 
et si on appel add2(2,2) plusieur fois avec les mêmes arguments, il va retourner la même réponse

avec les fonctions pure, on réduit le nombre de bugs
*/
console.log('Fonction pure');

const add2 = (a, b) => a + b;

console.log(add2(2,2)); // retourne 4
console.log(add2(2,2)); // retourne 4
console.log(add2(2,2)); // retourne 4
console.log(add2(2,2)); // retourne 4
