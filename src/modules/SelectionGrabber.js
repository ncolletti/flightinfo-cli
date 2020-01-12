
import AirportPrompter from '../prompters/airportPrompter';

// const inquirer = require('inquirer');

class SelectionGrabber {
    async run() {  // eslint-disable-line 
        const { departureAirport } = await AirportPrompter('departureAirport', 'Enter your Departure Airport Code');
        const { arrivalAirport } = await AirportPrompter('arrivalAirport', 'Enter your Arrival Airport Code');
        console.log(`Departure airport is ${JSON.stringify(departureAirport)}`);
        console.log(`Arrival airport is ${arrivalAirport}`);
    }
}


export default SelectionGrabber;
