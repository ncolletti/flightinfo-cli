const inquirer = require('inquirer');

const cabinPrompter = async (message) => {
         const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'list',
                name: 'mode',
                message,
                choices: [
                    {
                        name: 'Economy',
                    },
                    {
                        name: 'Economy Premium',
                    },
                    {
                        name: 'Business',
                    },
                    {
                        name: 'First Class',
                    },
                ],
                validate(input) {
                    if (input.length < 1) {
                        return 'You must choose at least one cabin type.';
                    }

                    return true;
                },
            },
        ])
        .then((answers) => {
            // adjust value of selection to fit Kiwi api scheme
            switch (answers.mode) {
                case "Economy":
                    return "M";
                case "Economy Premium":
                    return "W";
                case "Business":
                    return "C";
                break;
                case "First Class":
                    return "F";
                default:
                    return "M";
            }
        });
    return answer;
};


export default cabinPrompter;
