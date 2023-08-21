import chalk from "chalk";
import banner from "node-banner";
import inquirer from "inquirer";

const sleep = () => {
    return new Promise((res)=>{
        banner("Regestration Form")
        setTimeout(res, 2000)
    })
}
async function studentInfo() {
    await sleep();
    let studentInput = await inquirer.prompt([
        {
            name: "Name",
            type: "string",
            message: chalk.cyan("What is You Name: ")
        },
        {
            name: "Phone",
            type: "number",
            message: chalk.cyan("What is You Phone-Number: ")
        },
        {
            name: "Address",
            type: "string",
            message: chalk.cyan("What is You Adress: ")
        },
        {
            name: "CNIC",
            type: "number",
            message: chalk.cyan("Enter Your CNIC-Number: ")
        },
        {
            name: "Wattsapp",
            type: "string",
            message: chalk.cyan("Enter Your Whatsapp-Number: ")
        }
    ])
    console.log(studentInput)
}
studentInfo();