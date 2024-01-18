// Fonction utilisée
function getArrayWithoutLetter(arr, searchString) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let containsLetter = false;

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].toLowerCase() === searchString.toLowerCase()) {
                containsLetter = true;
                break;
            }
        }

        if (!containsLetter) {
            result.push(arr[i]);
        }
    }

    return result;
}


// Parsing
function getArgument() {
    let argument = process.argv.slice(2);
    return argument;
}

// Résolution
function resolution(){
const myArguments = getArgument();
return getArrayWithoutLetter(myArguments, myArguments[myArguments.length - 1]).join(" ");
}

// Affichage
console.log(resolution());
