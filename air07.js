// Fonction utilisée
function IsSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function InsertingIntoASortedArray(array, newElement) {
  const isSorted = IsSorted(array);
  
  if (isSorted === true) {
    let i = 0;
    while (i < array.length && array[i] < newElement) {
      i++;
    }

    array.splice(i, 0, newElement);

    console.log(array);
  } else {
    array.sort((a, b) => a - b);
    array.splice(i, 0, newElement);
    console.log(array);
  }
}

// Parsing
function getArgument() {
  let arguments = process.argv.slice(2);
  return arguments;
}

// Résolution
function Résolution(){
  let myArguments = getArgument();
  let result = InsertingIntoASortedArray(myArguments.slice(0, -1).map(Number), Number(myArguments[myArguments.length - 1]));
  return result;
}

// Affichage
Résolution();
