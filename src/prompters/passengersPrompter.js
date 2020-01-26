const inquirer = require('inquirer');

const passengersPrompter = async (message) => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'input',
                name: 'passengers',
                message: 'How many adult tickets are needed? (1-9)',
                validate(input) {
                    return new Promise((resolve, reject) => {
                        if (input <= 9) {
                            resolve(true);
                        }
                        reject('Can only accept max 9 passengers'); // eslint-disable-line
                    });
                },
            },
        ])
        .then((answers) => answers);
    return answer;
};


export default passengersPrompter;
