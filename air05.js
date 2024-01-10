function onEach(arg, separateur) {
    for (let i = 0; i < arg.length; i++) {
        let args = parseInt(arg[i]);
        let sep = parseInt(separateur);
        let resultat = args + sep;
        console.log(resultat);
    }
}

// Gestion d'erreur / Parsing
function getArgument() {
    let argument = process.argv.slice(2);
    return argument;
}

// Résolution
let myArgument = getArgument();
let result = onEach(myArgument.slice(0, -1), myArgument[myArgument.length - 1]);

// Affichage
console.log(result);
