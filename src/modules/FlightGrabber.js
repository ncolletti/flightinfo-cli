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

        // reduce to top 10 flights based on price
        const flightsTrimmmed = this.sortAndTruncate(flights, 10);

        const { chosenFlight } = await FlightListPrompter(flightsTrimmmed);

        let index = this.findFlightIndex(chosenFlight);

        if(index && index.length > 0) {
            index = index[1]
            this.setFlight(flightsTrimmmed[index]);
        }
    }

    sortAndTruncate(flightData, max) {
        return flightData.data.sort((a, b) => ((a.price > b.price) ? 1 : -1)).splice(0, max);
    }

    findFlightIndex(chosenFlight) {
        return chosenFlight.match(/^\|(\d)\|/);
    }

    setFlight(flight) {
        this.flight = flight;
    }

    getFlight() {
        return this.flight;
    }
}

export default FlightGrabber;
