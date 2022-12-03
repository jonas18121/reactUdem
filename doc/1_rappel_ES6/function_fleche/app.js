// Avant ES6

function presentation() {
    console.log("hello word");
}

presentation();



// Après ES6

// le gros avantage des function fléché est la lisibilité
presentation2 = () => {
    console.log("hello word 2");
}
presentation2();



// si on a qu'une chose a retourné , on peut le faire sur une ligne et enlevé les accolades
const presentation3 = () => console.log("hello word 3");
presentation3();



// si on a qu'un paramètre, on peut enlevé les parenthèses
const presentation4 = nom => console.log("hello " + nom);
presentation4("jean");


// si on a plusieurs paramètres, il faut ajouter les parenthèses
const presentation5 = (nom, age) => console.log("hello " + nom + " " + age + " ans");
presentation5("jean", 25);


// avec les batik
const presentation6 = nom => console.log(`hello mister ${nom}`);
presentation6("jean");

const presentation7 = (nom, age) => console.log(`hello ${nom} ${age} ans`);
presentation7("jean", 25);



// avec un utilisation de fonction calleback

// forEach
const fruits = ['pomme', 'orange', 'poire'];
fruits.forEach(fruit => console.log(fruit));


