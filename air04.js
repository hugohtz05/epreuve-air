//fonction utilisée 
function oneToOne(arg) {
    let newString = "";
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] !== arg[i + 1]) {
            newString += arg[i];
        }
    }
    return newString;
}

//Parsing
function getArgument() {
    let argument = process.argv.slice(2).join(" "); 
    return argument;
}

// Résolution
let myArgument = getArgument();
let result = oneToOne(myArgument);

// Affichage
console.log(result);
