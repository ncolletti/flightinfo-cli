const inquirer = require('inquirer');

const currencyPrompter = async () => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'input',
                name: 'currency',
                message: 'Please enter your preferred currency (ex. USD, EUR)',
                validate(input) {
                    return new Promise((resolve, reject) => {
                        if(input.match(/^[A-Za-z]{2,3}$/gi)) {
                            resolve(true)
                        }
                        reject('Re-enter a valid 2-3 letter currency code')
                    })
                }
            },
        ])
        .then((answers) => answers);
    return answer;
};


export default currencyPrompter;
