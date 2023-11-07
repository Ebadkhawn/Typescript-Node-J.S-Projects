/* Develop a simple command line Todo app using TypeScript, Node.js and Inquirer. */
import inquirer from "inquirer";
let todo = [];
let loop = true;
while (loop) {
    let ans = await inquirer.prompt([
        {
            message: "What would you like to add in your Todo List",
            type: "input",
            name: "data"
        },
        {
            message: "Would you like to add more in your Todo List",
            type: "confirm",
            name: "add",
            default: false
        }
    ]);
    let { data, add } = ans;
    loop = add;
    if (data) {
        todo.push(data);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todo.length > 0) {
    console.log("Your Todo List");
    todo.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("Try Again");
}
// End
