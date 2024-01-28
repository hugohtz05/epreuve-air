const fs = require('fs');


if (process.argv.length !== 3) {
    console.error('Usage: node exo.js <nom-du-fichier>');
    process.exit(1);
}

const fileName = process.argv[2];


fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(`Erreur de lecture du fichier "${fileName}": ${err.message}`);
        process.exit(1);
    }

    console.log(data);
});
