#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
// Delare the program
const program = new commander_1.Command();
// Add actions onto that CLI
program
    .argument("<sting>", "string to log")
    .option("-c, --capitalize", "Capitalize the message")
    .action((message, opts) => {
    if (opts.capitalize) {
        console.log(message.toUpperCase());
    }
    else {
        console.log(message);
    }
})
    .description("Say hello");
program
    .command('add <numbers...>')
    .description('Add a list of numbers')
    .action((numbers) => {
    const nums = numbers.map(Number);
    const sum = nums.reduce((acc, num) => acc + num, 0);
    console.log(`The sum is: ${sum}`);
});
program
    .command("get-max-number <numbers...>")
    .action((numbers) => {
    const max = Math.max(...numbers);
    console.log(`Max: ${max}`);
})
    .description("Add numbersand log the total");
// Execute the CLI with the given arguments
program.parse(process.argv);
