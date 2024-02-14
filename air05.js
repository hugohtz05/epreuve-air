//fonction utilisée
function onEach(arg, separateur) {

    let result = [];
    
    let operator = (separateur[0] === '-') ? -1 : 1;
    let operand = parseInt(separateur);

    for (let i = 0; i < arg.length; i++) {
        let currentNumber = parseInt(arg[i]);

        if (isNaN(currentNumber)) {
            console.error("Erreur : Argument non numérique.");
            process.exit(1);
        }

        let resultNumber = currentNumber + (operator * operand);
        result.push(resultNumber);
    }
    
    return result;
}

// Parsing
function getArgument() {
    let argument = process.argv.slice(2);
    return argument;
}

// Résolution
function getStringConcatened() {
    const myArguments = getArgument();
    const stringArray = myArguments.slice(0, -1);
    const separator = myArguments[myArguments.length - 1];
    const result = onEach(stringArray, separator);

    return result;
}

// Affichage
console.log(getStringConcatened().join(" "));
