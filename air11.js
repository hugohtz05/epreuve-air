// Fonction utilisée
function pyramid(arg, floor) {
    for (let i = 0; i < floor; i++) {
        const espaces = ' '.repeat(floor - i - 1);
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
