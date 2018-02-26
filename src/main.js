#!/usr/bin/env node
const VERSION = "0.1";

const interpreter = require('./interpreter.js');

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

if(process.argv.length === 2) {
    const t = () => rl.question('> ', (x) => {
        if(x === "quit") {
            process.exit(0);
        } else {
            rl.pause();
            interpreter.eval(x, rl);
            rl.resume();
            t();
        }
    });

    t();
} else if(process.argv[2] === "--version") {
    console.log("lel interpreter version " + VERSION);
} else {
    interpreter.eval(process.argv[2]);
}
