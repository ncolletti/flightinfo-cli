import AirportPrompter from '../prompters/airportPrompter';
import ModePrompter from '../prompters/modePrompter';
import FlightPrompter from '../prompters/flightPrompter';
import TripPrompter from '../prompters/tripPrompter';
import DatePrompter from '../prompters/datePrompter';
import OptionsPrompter from '../prompters/optionsPrompter';

class SelectionGrabber {
    async run() {  // eslint-disable-line
        const { mode } = await ModePrompter('Are you researching for a new trip or an existing booked trip?');

        if (mode[0] === 'Existing Trip') {
            const { flightNumber } = await FlightPrompter('Enter your Flight # (ICAO)');
        }

        if (mode[0] === 'New Trip') {
            const { departureAirport } = await AirportPrompter('departureAirport', 'Enter your Departure Airport Code');
            const { arrivalAirport } = await AirportPrompter('arrivalAirport', 'Enter your Arrival Airport Code');
            const { tripType } = await TripPrompter();
            const { departureDate } = await DatePrompter('departure', 'Enter your Depature date and time');

            if (tripType[0] === 'Round Trip') {
                const { arrivalDate } = await DatePrompter('arrival', 'Enter your Arrival date and time');
            }

            const { directOnly, bestPrice, topAirlines } = await OptionsPrompter();
        }
    }
}


export default SelectionGrabber;
