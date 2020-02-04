const inquirer = require('inquirer');

const optionsPrompter = async () => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'confirm',
                name: 'directOnly',
                message: 'Would you like to search only Direct flights?',
            },
            {
                type: 'confirm',
                name: 'bestPrice',
                //TODO: return best_results param from response
                message: 'Would you like to return the best flight and ignore others?', // add docs on this
            },
            {
                type: 'confirm',
                name: 'topAirlines',
                message: 'Would you like to only search the top rated Airlines?',
            },
        ])
        .then((answers) => answers);
    return answer;
};


export default optionsPrompter;
