// Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.
import { add } from "./Addition.js";
import { sub } from "./Subtraction.js";
import { multi } from "./Multiply.js";
import { div } from "./Divide.js";
import { mod } from "./Modulus.js";
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter Your First Number",
        type: "number",
        name: "FNumber"
    },
    {
        message: `Enter Second Number`,
        type: `number`,
        name: `SNumber`
    },
    {
        message: `Choose Your Operator`,
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Divide", "Modulus"],
        name: `Operator`
    }
]);
console.log("   ", answer.FNumber);
console.log("   ", answer.SNumber);
console.log(" ========");
if (answer.Operator === "Addition") {
    let result1 = add(answer.FNumber, answer.SNumber);
    console.log("   ", result1);
}
else if (answer.Operator === "Subtraction") {
    let result2 = sub(answer.FNumber, answer.SNumber);
    console.log("   ", result2);
}
else if (answer.Operator === "Multiplication") {
    let result3 = multi(answer.FNumber, answer.SNumber);
    console.log("   ", result3);
}
else if (answer.Operator === "Divide") {
    let result4 = div(answer.FNumber, answer.SNumber);
    console.log("   ", result4);
}
else if (answer.Operator === "Modulus") {
    let result5 = mod(answer.FNumber, answer.SNumber);
    console.log("   ", result5);
}
else {
    console.log("Incorrect Value.. Try Again");
}
;
console.log(" ========");
//Program End
