const airlines = require('airline-codes');

/**
 * Formats an IsoDateTime "yyyy-mm-dd'T'HH:MM:ss" to Kiwi.com api format "%d\/%m\/%Y %H:%M"
 * makes an array.
 * @param string date
 * @return string date
 */
export function dateSwap(date) {
    const [total, year, month, day, hour, minute, second] = date.match(/^(\d{4})-(\d{1,2})-(\d{1,2})T(\d{1,2}):(\d{1,2}):(\d{1,2})/);

    return `${day}/${month}/${year} ${hour}:${minute}`;
}

export async function grabAirlineName(route) {
    const airline = await airlines.findWhere({
        iata: route.airline,
    }).get('name');
    return airline;
}

export function buildChoices(flightData) {
    console.log('NSC: buildChoices -> flightData', flightData[0]);
    // TODO: build airline name into result - difficulty with promise from airlines pacakge and many results to display
    return flightData.map((flight) => `price: ${flight.price} || duration: ${flight.fly_duration}`);
}
