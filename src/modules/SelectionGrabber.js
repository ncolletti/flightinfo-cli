import AirportPrompter from '../prompters/selections/airportPrompter';
import ModePrompter from '../prompters/selections/modePrompter';
import FlightPrompter from '../prompters/selections/flightPrompter';
import TripPrompter from '../prompters/selections/tripPrompter';
import DatePrompter from '../prompters/selections/datePrompter';
import OptionsPrompter from '../prompters/selections/optionsPrompter';
import CurrencyPrompter from '../prompters/selections/currencyPrompter';
// import PassengersPrompter from '../prompters/passengersPrompter';
import AdvancedOptionsPrompter from '../prompters/selections/advancedOptionsPrompter';
import MaxPricePrompter from '../prompters/selections/maxPricePrompter';
import CabinPrompter from '../prompters/selections/cabinPrompter';
import BagsPrompter from '../prompters/selections/bagsPrompter';

import Trip from '../models/Trip';


class SelectionGrabber {
    constructor() {
        this.tripDetails = '';
    }
    async run() {  // eslint-disable-line
        const { mode } = await ModePrompter('Are you researching for a new trip or an existing booked trip?');

        if (mode[0] === 'Existing Trip') {
            const { flightNumber } = await FlightPrompter('Enter your Flight # (ICAO)');
        }

        // TODO: need better routing between modes/paths

        if (mode[0] === 'New Trip') {
            const { departureAirport } = await AirportPrompter('departureAirport', 'Enter your Departure Airport Code');
            const { arrivalAirport } = await AirportPrompter('arrivalAirport', 'Enter your Arrival Airport Code');
            const tripType = await TripPrompter();
            const departureDate = await DatePrompter('Enter your Depature date and time');


            const trip = new Trip(departureAirport, arrivalAirport, tripType, departureDate);

            if (tripType === 'round') {
                const arrivalDate = await DatePrompter('Enter your Arrival Back date and time');
                trip.set('dateArriveBack', arrivalDate);
            }

            const { currency } = await CurrencyPrompter();
            trip.set('currency', currency);

            // const { passengers } = await PassengersPrompter();
            // trip.set('passengers', passengers);

            const bags = await BagsPrompter();
            trip.set('bags', bags);

            const advancedOptions = await AdvancedOptionsPrompter();


            if (advancedOptions) {
                const maxPrice = await MaxPricePrompter();
                const cabinType = await CabinPrompter('Please choose what Cabin type you would like');

                const { directOnly, bestPrice, topAirlines } = await OptionsPrompter();

                const options = {
                    maxPrice, cabinType, directOnly, bestPrice, topAirlines,
                };

                trip.set('advancedOptions', options);
            }

            console.log('Trip setup: ', trip);

            trip.fixCabinValue();
            trip.fixDateValues();

            // save selections data
            this.setTripDetails(trip)
        }
    }

    // once selections are complete save the Trip class data
    setTripDetails(tripBuilt) {
        this.tripDetails = tripBuilt;
    }

    getTripDetails() {
        return this.tripDetails;
    }
}


export default SelectionGrabber;
