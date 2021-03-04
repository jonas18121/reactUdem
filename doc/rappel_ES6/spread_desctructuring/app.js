console.log("Spread operator");
// Spread operator


let tab = [1,2,3];
console.log(tab);

// exemple si on veut ajouter le chiffre 4 , dans le tableau tab, on peut faire un .push()
tab.push(4);
console.log(tab);

/*
Ou on peut aussi utiliser le Spread operator
qui va reformer un tableau qu'on va recupérer après
*/
console.log(tab = [...tab, 5]);
console.log(tab);

/*
Si on utilise une fonction fléché a l'intérieur par exemple fi==.filter()
ça va nous retourné un nouveau tableau avec tous les chiffres qui sont différents de 2
*/
console.log(tab = [...tab.filter(num => num !== 2)]);
console.log(tab);


/*
On peut utiliser le spread operator avec un objet
*/

const personne = {
    nom: "Hugo",
    age: 35
}
console.log(personne);

/*
spread = étendre

on va étendre l'objet personne et on lui rajoute une propriété email 
 */
const presentation = {
    ...personne,
    email : "hugo@gmail.com"
}

console.log(presentation);



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
console.log(rue + ' ' + ville);

const {nom , loisirs} = profil;
console.log(nom + ' ' + loisirs);

