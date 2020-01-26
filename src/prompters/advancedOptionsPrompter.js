const inquirer = require('inquirer');

const advancedOptionsPrompter = async () => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'confirm',
                name: 'advancedOptions',
                message: `Would you like to use Advanced search options?
       (Max Price, Direct Only, Best Price, Top Airtlines)`,
            },
        ])
        .then((answers) => answers.advancedOptions);
    return answer;
};


export default advancedOptionsPrompter;
