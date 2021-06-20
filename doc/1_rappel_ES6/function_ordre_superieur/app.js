// Les fonctions d'ordre supérieur

/* 
Une fonction d'ordre supérieur, est une fonction qui prend en argument une autre focntion 
ou qui retourne une fonction 
ou les 2 en même temps 
*/

// En procedurale
console.log('En procedurale');

// on veut récupéré les valeur du tableau rawArr qui sont au dessus de 100 et les mettres dans un autre tableau newArr  

const rawArr = [5, 6, 5888, 55, 258, 120];

const newArr = [];

for (let i = 0; i < rawArr.length; i++) {

    if (rawArr[i] > 100) {
        
        newArr.push(rawArr[i]);
    }    
}

console.log(newArr); // retourne (3) [5888, 258, 120]


// En fonction d'ordre supérieur
console.log('En fonction d\'ordre supérieur');

const rawArr2 = [5, 6, 5888, 55, 258, 120];

/**
 * 
 * fonction d'ordre supérieur qui prend en 2èmes paramètre la fonction callback()
 * 
 * @param {Array} param 
 * @param {Function} callback 
 * @returns Array newArr
 */
function supperieurArr(param, callback) {
    
    const newArr = [];

    for (let i = 0; i < param.length; i++) {

        if (callback(param[i])) {
            
            newArr.push(param[i]);
        }    
    }

    return newArr;
}

// on peut , réutiliser plusieur fois supperieurArr avec une function callback avec des conditions différente 

/**
 * On utilise la fonction d'ordre supérieur supperieurArr()
 * en 1er paramètre on lui passe le tableau rawArr
 * en 2èmes paramètre on lui passe une fonction annonyme
 */
const arrSup100 = supperieurArr(rawArr2, (item) => {

    if (item > 100) {
        return item;
    }
});

console.log(arrSup100); // retourne (3) [5888, 258, 120]

/**
 * On utilise la fonction d'ordre supérieur supperieurArr()
 * en 1er paramètre on lui passe le tableau rawArr
 * en 2èmes paramètre on lui passe une fonction annonyme
 */
 const arrSup10 = supperieurArr(rawArr2, (item) => {

    if (item > 10) {
        return item;
    }
});

console.log(arrSup10); // retourne (4) [5888, 55, 258, 120]


