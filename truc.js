'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    console.log('staircase', n);
    console.log('typeof', typeof n);
    const line = Array(n).fill(' ');

    Array(n)
        .fill()
        .forEach((_,lineIndex) => {
            const line = Array(n)
                .fill(' ')
                .map((_,itemIndex) =>  n - lineIndex > itemIndex + 1 ? ' ' : '#')
            console.log(line)

        });
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
staircase(4);