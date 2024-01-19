// Fonction utilisée
function sortedInsert(array, newElement) {
    const indexToInsert = array.findIndex(element => element > newElement);
  
    if (indexToInsert === -1) {
      array.push(newElement);
    } else {
      array.splice(indexToInsert, 0, newElement);
    }
  
    return array;
  }
  
  // Parsing
  function getArgument() {
    let arguments = process.argv.slice(2);
    const inputArray = arguments.map(Number);
    return inputArray;
  }
  
  // Résolution
  let myArguments = getArgument();
  const newElement = myArguments.pop();
  const resultArray = sortedInsert(myArguments, newElement);
  let result = resultArray.join(' ');
  
  // Affichage
  console.log(result);
  