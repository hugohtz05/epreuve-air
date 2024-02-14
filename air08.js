// Fonction utilisée
function sorted_fusion(array1, array2) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }


    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
  
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
  
    return result;
}

// Parsing
function getArgument() {
    let arguments = process.argv.slice(2);
    return arguments;
}

// Résolution
let myArguments = getArgument();
const fusionIndex = myArguments.indexOf("fusion");
const array1 = myArguments.slice(0, fusionIndex).map(Number);
const array2 = myArguments.slice(fusionIndex + 1).map(Number);


const result = sorted_fusion(array1, array2);

// Affichage 
console.log(result);
