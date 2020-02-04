const inquirer = require('inquirer');

const flightPrompter = async () => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'input',
                name: 'checkedBags',
                message: 'How many Checked bags?',
                validate(input) {
                    const val = parseInt(input, 10)
                    return new Promise((resolve, reject) => {
                        if (Number.isInteger(val)) {
                            resolve(true);
                        }
                        reject('Please enter a number.'); // eslint-disable-line
                    });
                },
            },
            {
                type: 'input',
                name: 'carryOnBags',
                message: 'How many Carry ons?',
                validate(input) {
                    const val = parseInt(input, 10)
                    return new Promise((resolve, reject) => {
                        if (Number.isInteger(val)) {
                            resolve(true);
                        }
                        reject('Please enter a number.'); // eslint-disable-line
                    });
                },
            },
        ])
        .then((answers) => answers);
    return answer;
};


export default flightPrompter;
