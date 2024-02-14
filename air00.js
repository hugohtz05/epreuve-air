// Fonction utilisée
function customSplit(arg, separateur) {
    let mots = [];
    let mot = '';

    for (let i = 0; i < arg.length; i++) {
        let caractereCourant = arg[i];

        if (caractereCourant !== separateur) {
            mot += caractereCourant;
        } else {
            mots.push(mot);
            mot = '';
        }
        
        if(separateur === undefined){
            separateur = " "
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
console.log(result);
