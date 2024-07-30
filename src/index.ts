#!/usr/bin/env node

import { Command } from 'commander'

// Delare the program
const program = new Command();

// Add actions onto that CLI
program
.argument("<sting>", "string to log")
.option("-c, --capitalize", "Capitalize the message")
.action((
    message: string,
    opts: {
        capitalize? : boolean;
    },
)=>{
    if (opts.capitalize){
        console.log(message.toUpperCase())
    } else {
        console.log(message)
    }
    
})
.description("Say hello")

program
.command('add <numbers...>')
  .description('Add a list of numbers')
  .action((numbers: string[]) => {
    const nums = numbers.map(Number);
    const sum = nums.reduce((acc, num) => acc + num, 0);
    console.log(`The sum is: ${sum}`);
  });

program
.command("get-max-number <numbers...>")
.action((numbers: number[])=>{
    const max = Math.max(...numbers);
    console.log(`Max: ${max}`)
})
.description("Add numbersand log the total")

// Execute the CLI with the given arguments
program.parse(process.argv)