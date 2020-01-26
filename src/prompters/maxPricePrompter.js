const inquirer = require('inquirer');

const maxPricePrompter = async () => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'input',
                name: 'maxPrice',
                message: 'What is the highest amount of money you would like to spend?',
                validate(input) {
                    return new Promise((resolve, reject) => {
                        if(Number.isInteger(parseInt(input))) {
                            resolve(true)
                        }
                        reject('Please enter a valid number amount without currency symbols')
                    })
                }
            },
        ])
        .then((answers) => answers.maxPrice);
    return answer;
};


export default maxPricePrompter;
