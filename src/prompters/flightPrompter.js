const inquirer = require('inquirer');

const flightPrompter = async (message) => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'input',
                name: 'flightNumber',
                message,
                validate(input) {
                    return new Promise((resolve, reject) => {
                        if (input.match(/^([A-Za-z]{3}|[A-Za-z][0-9]|[0-9][A-Za-z])([0-9]+)$/)) {
                            resolve(true);
                        }
                        reject('Please enter a valid ICAO Flight code.'); // eslint-disable-line
                    });
                },
            },
        ])
        .then((answers) => answers);
    return answer;
};


export default flightPrompter;
