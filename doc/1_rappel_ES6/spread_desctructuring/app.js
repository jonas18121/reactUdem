console.log("Spread operator");
// Spread operator


let tab = [1,2,3];
console.log(tab); // return (3) [1, 2, 3]

// exemple si on veut ajouter le chiffre 4 , dans le tableau tab, on peut faire un .push()
tab.push(4);
console.log(tab); // return (4) [1, 2, 3, 4]

/*
Ou on peut aussi utiliser le Spread operator
qui va reformer un tableau qu'on va recupérer après
*/
console.log(tab = [...tab, 5]); // return (5) [1, 2, 3, 4, 5]
console.log(tab); // return (5) [1, 2, 3, 4, 5]

/*
Si on utilise une fonction fléché a l'intérieur par exemple .filter()
ça va nous retourné un nouveau tableau avec tous les chiffres qui sont différents de 2
*/
console.log(tab = [...tab.filter(num => num !== 2)]); // return (4) [1, 3, 4, 5]
console.log(tab); // return (4) [1, 3, 4, 5]


/*
On peut utiliser le spread operator avec un objet
*/

const personne = {
    nom: "Hugo",
    age: 35
}
console.log(personne); // return {nom: "Hugo", age: 35}

/*
spread = étendre

on va étendre l'objet personne et on lui rajoute une propriété email 
 */
const presentation = {
    ...personne,
    email : "hugo@gmail.com"
}

console.log(presentation); // return {nom: "Hugo", age: 35, email: "hugo@gmail.com"}



console.log("Destructuring");

// Destructuring
// le Destructuring permet de prendre la valeur des propriété qu'on veut dans un objet

const profil = {
    nom: 'John',
    adresse: {
        rue: '36 quai des orfèvres',
        ville: 'Paris'
    },
    loisirs: ['Films', 'Sport']
}

const {rue, ville} = profil.adresse;
console.log(rue + ' ' + ville); // return 36 quai des orfèvres Paris

const {nom , loisirs} = profil;
console.log(nom + ' ' + loisirs); // return John Films,Sport

