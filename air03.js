//Fonction utilisées
function showIntruder(arg) {
    let unique = "il n'y a pas de chiffre impair";
    for (let i = 0; i < arg.length; i++) {
        let isUnique = true;
        for (let j = 0; j < arg.length; j++) {
            if (i !== j && arg[i] === arg[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            unique = arg[i];
            break;
        }
    }
    console.log(unique);
}


//Gestion d'erreur
//Parsing
function getArgument(){
    let argument = process.argv.slice(2);
    return argument;
}
//Resolution
let myArgument = getArgument();
let result =  showIntruder(myArgument);

//affichage
console.log(result);