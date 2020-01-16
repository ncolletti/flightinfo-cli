const inquirer = require('inquirer');

const modePrompter = async (message) => {
         const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'checkbox',
                name: 'mode',
                message,
                choices: [
                    {
                        name: 'New Trip',
                    },
                    {
                        name: 'Existing Trip',
                    },
                ],
                validate(input) {
                    if (input.length < 1) {
                        return 'You must choose at least one mode.';
                    }

                    if (input.length > 1) {
                        return 'You cannot have multiple modes.';
                    }

                    return true;
                },
            },
        ])
        .then((answers) => answers);
    return answer;
};


export default modePrompter;
