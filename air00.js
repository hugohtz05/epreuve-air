// Fonction utilisée 
function split() {
    let n = process.argv.length;
    for (let i = 2; i < n; i++) {
        let arg = process.argv[i];
        console.log(arg);
    }
}

// Parsing
function getArgument() {
    let arguments = process.argv.slice(2);
    return arguments;
}

// Resolution
let myArguments = getArgument();
let result = split(myArguments)

// Affichage
console.log(result);
