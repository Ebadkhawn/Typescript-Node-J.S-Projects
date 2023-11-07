
/* This somewhat complex TypeScript/Node.js project is a console-based application.
When the system starts the user is prompted with a user id and user pin. After entering the details
successfully, the ATM functionalities are unlocked. All the user data is generated randomly. */

import inquirer from "inquirer";

interface anyType
{
    id: string,
    pin: number,
    withDraw: number,
    transaction: string,
    transactionType: number,

}

console.log ("Welcome To ATM");

let ans: anyType = await inquirer.prompt
([
    {
        message: "Please Enter Your I.D",
        type: "input",
        name: "id"
    },

    {
        message: "Please Enter Your Pin",
        type: "input",
        name: "pin"

    },

    {
        message: "Please Select Your Transaction",
        type: "list",
        name: "transaction",
        choices: ["Fast Cash", "With Draw"],
    },

    {
        message: "Please Select Your Amount",
        type: "list",
        name: "transactionType",
        choices: [500 , 1000 , 2000 , 5000 , 1000 ],
        when(ans) {return ans.transaction == "Fast Cash"}
    },

    {
        message: "Please Enter Amount in Multiples of Rs 500 or Rs 1000",
        type: "number",
        name: "transactionType",
        when(ans) {return ans.transaction == "With Draw"}
    },

])
if (ans.id && ans.pin)
{
    let balance = Math.floor(Math.random()*100000);
    console.log("Your previous balance is",balance)
    let EnteredAmount = ans.transactionType;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log( "Your Remaining Balance is",remaining)        
    } else {
        console.log("Insufficient Balance")        
    }
}

// THE END ;)