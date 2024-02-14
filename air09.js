// Fonction utilisée
function ma_rotation(array) {
    gestionErreurs(array);

    const firstElement = array.shift();
    array.push(firstElement);

    return array;
}

// Gestion erreur 
function gestionErreurs(array) {
    if (!Array.isArray(array)) {
        console.error("Erreur : L'argument doit être un tableau.");
        process.exit(1);
    }

    if (array.length < 1) {
        console.error("Erreur : Le tableau doit avoir au moins un élément.");
        process.exit(1);
    }
}

// Parsing
function getArgument() {
    return process.argv.slice(2);
}

// Résolution
let myArguments = getArgument();
let result = ma_rotation(myArguments);

// Affichage
console.log(result.join(', '));
