const inquirer = require(`inquirer`);
const chalk = require('chalk');
const Password = require(`./password`);

// Prompt Chalk Styles and Dividers

const header = chalk.bold.inverse;
const error = chalk.bold.red;
const divider = `\n---------------------------------------------------\n`

// Inquirer Questions

inquirer
    .prompt([
        {
            type: `input`,
            name: `length`,
            message: divider + header(` PASSWORD LENGTH `)+ divider + (`Select a number between 8 and 128:\n`),
            validate: function(val) {

                const numVal = parseInt(val.trim());
                
                if(numVal < 129 && numVal > 7) {
                    return true;
                }

                return error(`Please enter a number between 8 and 128 for your password length.`);
            }
        },
        {
            type: `checkbox`,
            name: `charTypes`,
            message: divider + header(` CHARACTER TYPES `) + divider + (`Select one or more the types of characters for password:\n`),
            choices: [
                {
                    name: `Lowercase`
                },
                {
                    name: `Uppercase`
                },
                {
                    name: `Number`
                },
                {
                    name: `Special`
                }
            ],
            validate: (val) => {
                const valLength = val.length;

                if (val.length > 0) {
                    return true;
                }

                return error(`Please select atleast one character type`);
            }
        }

    ])
    .then(({length, charTypes}) => {
        const yourPassword = new Password(charTypes, length);
        console.log(divider + header(` YOUR PASSWORD HAS BEEN GENERATED! `) + divider + (`${yourPassword.printPassword()}\n`));
    })
    .catch((error) => {
        console.log(error(`Something went wrong...`))
    });