// LES CLASSES
// creer des objets

class Personne {

    constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }

    bienvenue(){
        return `Bonjour, mon nom est ${this.nom} et j'ai ${this.age} ans.`;
    }
}

const personne1 = new Personne('Jhon', '22');

console.log(personne1); // return Personne {nom: "jhon", age: "22"}

console.log(personne1.bienvenue()); // return Bonjour, mon nom est Jhon et j'ai 22 ans.