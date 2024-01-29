// Fonction utilisée
function pyramid(arg, boucle) {
    for (let i = 0; i < boucle; i++) {
        const espaces = ' '.repeat(boucle - i - 1);
        const caracteres = arg.repeat(2 * i + 1);
        console.log(espaces + caracteres);
    }
}

// Parsing
function getArgument() {
    let arguments = process.argv.slice(2);
    return arguments;
}

// Résolution
let myArguments = getArgument();
let [caractere, numberOfFloors] = myArguments;

// Affichage
pyramid(caractere, parseInt(numberOfFloors));
