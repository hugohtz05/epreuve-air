const { execSync } = require('child_process');



const exercices = [
    {
        name: 'air00',
        args: ['"Bonjour les gars"'],
        expectedOutput: ["[ 'Bonjour', 'les', 'gars' ]"],
    },
    {
        name: 'air01',
        args: ['"Crevette magique dans la mer des étoiles" "la"'],
        expectedOutput: ['Crevette magique dans   mer des étoiles']
        
    },
    {
        name: 'air02',
        args: ['"je" "teste" "des" "trucs" " "'],
        expectedOutput: ['je teste des trucs']
         
    },
    {
        name: 'air03',
        args: ['bonjour monsieur bonjour'],
        expectedOutput: ['monsieur'] 
    },
    {
        name: 'air04',
        args: ['Hello milady,   bien ou quoi ??'],
        expectedOutput: ['Helo milady, bien ou quoi ?'] 
    },
    {
        name: 'air05',
        args: ['1 2 3 4 5 "+2"'],
        expectedOutput: ['3 4 5 6 7'] 
    },
    {
    name: 'air06',
    args: ['Michel Albert Thérèse Benoit t'],
    expectedOutput: ['Michel'] 
    },
    {
    name: 'air07',
    args: ['1 3 4 2'],
    expectedOutput: ["[ 1, 2, 3, 4 ]"], 
    },
    {
        name: 'air08',
        args: ['10 20 30 fusion 15 25 35'],
        expectedOutput: ["[ 10, 15, 20, 25, 30, 35 ]"], 
    },
    {
        name: 'air09',
        args: ['Michel Albert Thérèse Benoit'],
        expectedOutput: ['Albert, Thérèse, Benoit, Michel'], 
    },
    {
        name: 'air10',
        args: ['test.txt'],
        expectedOutput: ['je danse le mia'], 
    },
    {
        name: 'air11',
        args: ['O 5'],
        expectedOutput: ["O\n   OOO\n  OOOOO\n OOOOOOO\nOOOOOOOOO"]
    },
    {
        name: 'air12',
        args: ['6 5 4 3 2 1'],
        expectedOutput: ['[ 1, 2, 3, 4, 5, 6 ]'], 
    },
]

let totalSuccess = 0;
let totalTests = 0;

function runTest(exercice) {
    const args = exercice.args.join(' ');

    try {
        const realOutput = execSync(`node ${exercice.name}.js ${args}`, { encoding: 'utf-8' }).trim();
        const expectedOutput = exercice.expectedOutput.toString();

        if (realOutput === expectedOutput) {
            totalSuccess++;
            console.log(`\x1b[32m`,`${exercice.name} (1/1) : success`);
        } else {
            console.log(`\x1b[31m`,`${exercice.name} (1/1) : failures`);
        }
    } catch (error) {
        console.log(`${exercice.name} (1/1) : failure ${error.message ? `(${error.message})` : ''}`);
    }
}

function runTests() {
    for (const exercice of exercices) {
        totalTests++;
        runTest(exercice);
    }
    console.log(`Total success: (${totalSuccess - 1}/${totalTests - 1})`);
}

runTests();
