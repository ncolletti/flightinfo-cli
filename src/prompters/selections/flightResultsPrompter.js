const inquirer = require('inquirer');

const flightResultsPrompter = async (message) => {
         const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'checkbox',
                name: 'flightResults',
                message,
                choices: [
                    //TODO: build choices based on results from kiwi api search
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


export default flightResultsPrompter;
