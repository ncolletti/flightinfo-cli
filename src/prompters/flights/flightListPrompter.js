const inquirer = require('inquirer');

import * as utils from '../../utils';


const flightListPrompter = async (flights) => {

    const choices = utils.buildChoices(flights);

    const answer = await inquirer // eslint-disable-line
        .prompt([{
            type: 'list',
            name: 'chosenFlight',
            message: 'Choose your flight from the list',
            choices,
            validate() {
                // TODO: add validation
                return true;
            },
        }])
        .then((answers) => answers);
    return answer;
};


export default flightListPrompter;
