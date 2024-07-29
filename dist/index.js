#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
// Delare the program
const program = new commander_1.Command();
// Add actions onto that CLI
program
    .argument("<sting>", "string to log")
    .action((message) => {
    console.log(`Hello ${message}!`);
})
    .description("Say hello");
// Execute the CLI with the given arguments
program.parse(process.argv);
