/**
ES6 sortie en 2015 = ES2015

var => Function Scoped

var pourra être lu dans toutes la fonction dans laquel elle va être déclaré


Let et Const => Block Scoped Variable

Let et Const seront lu seulement dans les block ou ils on été déclarer
 */


 // VAR

function variable_var() {

    // on peut lire la variable var dans le block for
    for (var index = 0; index < 5; index++) {
        console.log(index);
        
    }

    // on peut lire aussi la variable var en dehors du block for
    console.log("en dehors du block " + index);
}

variable_var();


//  LET
function variable_let() {

    // on peut lire la variable let dans le block for
    for (let index = 5; index < 10; index++) {
        console.log(index);
        
    }

    // on ne peut pas lire aussi la variable let en dehors du block for
    // il y aura une erreur
    // console.log("en dehors du block " + index);
}

variable_let();


// CONST

// on ne peut plus réassigner une variable
const nom = "Jean";

// il y aura une erreur
nom = "jul";

console.log(nom);



