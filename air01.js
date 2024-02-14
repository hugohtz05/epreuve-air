// Fonction utilisée
function customSplit(arg, separateur) {

    let mots = [];
    let mot = '';
    let separateurLength = separateur.length;

    for (let i = 0; i < arg.length; i++) {
        let sousChaine = arg.slice(i, i + separateurLength);

        if (sousChaine === separateur) {
            mots.push(mot);
            mot = '';
            i += separateurLength - 1; 
        } else {
            mot += arg[i];
        }
    }

    mots.push(mot);

    return mots;
}

// Parsing
function getArgument() {
    let arguments = process.argv.slice(2);
    return arguments;
}

// Résolution
let myArguments = getArgument();
let result = customSplit(myArguments[0], myArguments[1]);

// Affichage
console.log(result.join(" "));
