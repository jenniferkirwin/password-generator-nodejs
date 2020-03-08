const inquirer = require(`inquirer`);
const LowerCase = require(`./lowercase`);
const Character = require(`./character`);

// Asking the user's input to create password

inquirer
    .prompt([
        {
            type: `input`,
            name: `length`,
            message: `Password Length: Select a number between 8 and 128`,
            validate: function(val) {

                const numVal = parseInt(val.trim());
                
                if(numVal < 129 && numVal > 7) {
                    return true;
                }

                return `Please enter a number between 8 and 128 for your password length.`
            }
        },
        {
            type: `checkbox`,
            name: `charTypes`,
            choices: [
                {
                    name: `Lowercase`
                },
                {
                    name: `Uppercase`
                },
                {
                    name: `Numbers`
                },
                {
                    name: `Special Characters`
                }
            ]
        }

    ])
    .then((answers) => {console.log(answers)});