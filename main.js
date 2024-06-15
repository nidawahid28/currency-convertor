#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\tWelcome To Currency Convertor\n"));
// Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, // US dollars, base currency
    "EUR": 0.93, // Eurpean Currency
    "JYP": 157.44, //Japenese Currency
    "CAD": 1.38, // Canadian Dollar
    "AUD": 1.51, // Australian Dollar
    "PKR": 277.88, // Pakistan Rupees
};
// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.green("Enter the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.green("select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.green("Enter the amount to convert:")
    }
]);
//  Perform currency conversion by using Formula 
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(chalk.yellow(`Converted Amount = ${converted_amount.toFixed(2)}`));
