//Fonction utilisée
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

//Parsing
function getArgument(){
    let argument = process.argv.slice(2);
    return argument;
}
//Resolution
function Résolution(){
    let myArgument = getArgument();
    let result =  showIntruder(myArgument); 
    return result;
}

//affichage
Résolution();