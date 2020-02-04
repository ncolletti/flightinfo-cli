import { testApi } from '../services/kiwi';

import FlightListPrompter from '../prompters/flights/flightListPrompter';

class FlightGrabber {
    constructor(tripDetails) {
        this.tripDetails = tripDetails;
    }

    async run() {  // eslint-disable-line

        const flightData = await testApi(this.tripDetails);

        // flights received - return results to user with prompters
        const flights = flightData.data;

        const flightsReduced = this.sortAndTruncateToSix(flights);

        const chosenFlight = await FlightListPrompter(flightsReduced);
        console.log('NSC: FlightGrabber -> run -> chosenFlight', chosenFlight);
    }

    sortAndTruncateToSix(flightData) {
        return flightData.data.sort((a, b) => ((a.price > b.price) ? 1 : -1)).splice(0, 6);
    }
}

export default FlightGrabber;
