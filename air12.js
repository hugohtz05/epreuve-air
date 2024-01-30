function myQuickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];
    const left = array.filter(element => element < pivot);
    const middle = array.filter(element => element === pivot);
    const right = array.filter(element => element > pivot);

    return myQuickSort(left).concat(middle, myQuickSort(right));
}

// Parsing
function getArgument() {
    let arguments = process.argv.slice(2);
    return arguments.map(arg => parseInt(arg, 10)); // Convertir les arguments en nombres si nécessaire
}

// Résolution
let myArguments = getArgument();
let result = myQuickSort(myArguments);

// Affichage
console.log(result);
