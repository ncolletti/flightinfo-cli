const inquirer = require('inquirer');

const tripPrompter = async (message) => {
         const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'checkbox',
                name: 'tripType',
                message,
                choices: [
                    {
                        name: 'Round Trip',
                    },
                    {
                        name: 'One Way',
                    },
                ],
                validate(input) {
                    if (input.length < 1) {
                        return 'You must choose at least one trip type.';
                    }

                    if (input.length > 1) {
                        return 'You cannot have multiple trip type.';
                    }

                    return true;
                },
            },
        ])
        .then((answers) => answers);
    return answer;
};


export default tripPrompter;
