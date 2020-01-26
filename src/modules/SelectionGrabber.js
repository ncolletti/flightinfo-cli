import AirportPrompter from '../prompters/airportPrompter';
import ModePrompter from '../prompters/modePrompter';
import FlightPrompter from '../prompters/flightPrompter';
import TripPrompter from '../prompters/tripPrompter';
import DatePrompter from '../prompters/datePrompter';
import OptionsPrompter from '../prompters/optionsPrompter';
import CurrencyPrompter from '../prompters/currencyPrompter';
import PassengersPrompter from '../prompters/passengersPrompter';
import AdvancedOptionsPrompter from '../prompters/advancedOptionsPrompter';
import MaxPricePrompter from '../prompters/maxPricePrompter';
import CabinPrompter from '../prompters/cabinPrompter';

import { testApi } from '../services/kiwi';
import Trip from '../models/Trip';


class SelectionGrabber {
    async run() {  // eslint-disable-line
        const { mode } = await ModePrompter('Are you researching for a new trip or an existing booked trip?');

        if (mode[0] === 'Existing Trip') {
            const { flightNumber } = await FlightPrompter('Enter your Flight # (ICAO)');
        }

        //TODO: need better routing between modes/paths

        if (mode[0] === 'New Trip') {
            const { departureAirport } = await AirportPrompter('departureAirport', 'Enter your Departure Airport Code');
            const { arrivalAirport } = await AirportPrompter('arrivalAirport', 'Enter your Arrival Airport Code');
            const tripType  = await TripPrompter();
            const departureDate = await DatePrompter('Enter your Depature date and time');


            const trip = new Trip(departureAirport, arrivalAirport, tripType, departureDate);

            if (tripType === 'round') {
                const arrivalDate = await DatePrompter('Enter your Arrival Back date and time');
                trip.set('dateArriveBack', arrivalDate);
            }

            const { currency } = await CurrencyPrompter();
            trip.set('currency', currency);

            const { passengers } = await PassengersPrompter();
            trip.set('passengers', passengers);

            const advancedOptions = await AdvancedOptionsPrompter();


            if(advancedOptions) {
                const maxPrice = await MaxPricePrompter();
                const cabinType = await CabinPrompter('Please choose what Cabin type you would like');

                const { directOnly, bestPrice, topAirlines } = await OptionsPrompter();

                const options = { maxPrice, cabinType, directOnly, bestPrice, topAirlines }

                for (let option in options) {
                    trip.advancedOptions = {name: option, data:options[option]}
                }
            }

            console.log('Trip setup: ', trip)
            console.log('trip setup: ', JSON.stringify(trip.advancedOptions))

            // const flightData = await testApi(trip)

            // flights received - return results to prompter to user

            // const chosenFlight = await FlightResultsPrompter(flightData);

        }
    }
}


export default SelectionGrabber;
