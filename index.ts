/*
    - Shubham Mohanty
    - Web Dev - CSS
    - In Class Exercise 2
    - Description: This is a simple exercise,
      where we can convert js project to a ts project
*/

// Importing / Require prompt-sync 
const promptSync = require("prompt-sync")();
const calculator = require("./calculator");

const readInput = (): void => {
    console.log(
        "Welcome to the calculator. Choose one of the following options"
    );
    console.log("1. add");
    console.log("2. subtract");
    console.log("3. multiply");
    console.log("4. divide");
    console.log("5. exit");

    const option: string = promptSync(">> ");

    if (option !== "5") {
        console.log("Enter the first number");
        let a: number = Number(promptSync(">> "));

        console.log("Enter the second number");
        let b: number = Number(promptSync(">> "));

        let c: number;
        switch (option) {
            case "1": {
                c = calculator.add(a, b);
                console.log(`a + b = ${c}`);
                break;
            }

            case "2": {
                c = calculator.subtract(a, b);
                console.log(`a - b = ${c}`);
                break;
            }

            case "3": {
                c = calculator.multiply(a, b);
                console.log(`a * b = ${c}`);
                break;
            }

            case "4": {
                c = calculator.divide(a, b);
                console.log(`a / b = ${c}`);
                break;
            }
        }

        readInput();
    }
};

readInput();

console.log("Thank you for using the calculator. Goodbye.");
