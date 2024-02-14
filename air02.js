// Fonction utilisée 
function concatString(args, separator) {
    let string = "";

    for (let i = 0; i < args.length;i++){
        string += args[i];

        if (i < args.length -1){
            string += separator;
        }
    }

    return string
}

// Parsing
function getArgument() {
    let arguments = process.argv.slice(2);
    return arguments;
}

// Résolution
function getStringConcatened(){
    const myArguments = getArgument();
    const stringArray = myArguments.slice(0, -1)
    const separator = myArguments[myArguments.length - 1];
    const result = concatString(stringArray,separator);  

    return result;
}


// Affichage
console.log(getStringConcatened());
