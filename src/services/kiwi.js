import axios from 'axios';

import * as utils from '../utils/utils';

// trip is of type Class
export async function testApi(trip) {
    // TODO: build out functions for this eventually
    const dateFrom = utils.dateSwap(trip.dateFrom)
    const dateArriveBack = utils.dateSwap(trip.dateArriveBack)

    // TODO: create a function to build this url from Trip class
    const apiUrl = `https://api.skypicker.com/flights?fly_from=${trip.depart}&fly_to=${trip.arrive}&date_from=${dateFrom}&date_to=${dateArriveBack}&curr=${trip.currency}&flight_type=${trip.type}&adults=${trip.passengers}&price_to=${trip.maxPrice}&partner=kiwi&v=3`
    console.log(`NSC: testApi -> apiUrl`, apiUrl);

    // const flights = await axios.get(apiUrl)

    // if(!flights) {
    //     return "Error retrieving flights"
    // }

    // return flights.data;
}

//TODO: need a method that reads trip class to determine if it's one-way or round-trip - format kiwi url with new fields
// &dateTo =