const inquirer = require('inquirer');

import * as utils from '../../utils';


const flightListPrompter = async (flights) => {

    await utils.buildAirlineName(flights);

    const choices = flights.map((flight, i ) => `|${i}| ${(flight.airlineName)} || price: ${flight.price} || duration: ${flight.fly_duration}`);

    const answer = await inquirer // eslint-disable-line
        .prompt([{
            type: 'list',
            name: 'chosenFlight',
            message: 'Choose your flight from the list',
            choices,
            validate() {
                return true;
            },
        }])
        .then((answers) => answers);
    return answer;
};


export default flightListPrompter;
