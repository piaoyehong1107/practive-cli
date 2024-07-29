#!/usr/bin/env node

import { Command } from 'commander'

// Delare the program
const program = new Command();

// Add actions onto that CLI
program
.argument("<sting>", "string to log")
.action((message: string)=>{
    console.log(`Hello ${message}!`)
})

.description("Say hello")

// Execute the CLI with the given arguments
program.parse(process.argv)