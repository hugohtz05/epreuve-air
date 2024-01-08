// Fonction de découpe sans utiliser split
function concatenerAvecSeparateur(arg, separateur) {
    mot = "";
    for (let i = 0; i < arg.length;i++){
        mot += arg[i];
        if (i < arg.length){
        mot += separateur;
    } 
}
    return mot
}

// Parsing
function getArgument() {
    let arguments = process.argv.slice(2);
    return arguments;
}

// Résolution
let myArguments = getArgument();
let result = concatenerAvecSeparateur(myArguments.slice(0, -1), myArguments[myArguments.length - 1]);

// Affichage
console.log(result);
