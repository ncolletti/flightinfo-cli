const inquirer = require('inquirer');
const airports = require('iata-airports');

const airportPrompter = async (name, message) => {
       const answer = await inquirer // eslint-disable-line
        .prompt([
            {
                type: 'input',
                name,
                message,
                validate(input) {
                    return new Promise((resolve, reject) => {
                        const validAirport = airports.findWhere({ iata: input });
                        if (validAirport !== undefined) {
                            resolve(true);
                        } else {
                            reject('You\'ve entered an invalid Iata Airport code.');  // eslint-disable-line
                        }
                    });
                },
            },
        ])
        .then((answers) => answers);
    return answer;
};


export default airportPrompter;
