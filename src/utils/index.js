
import airlines from './airlines';

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

/**
 * Search through array of Airline objects for Airline Name based on the IATA Code.
 * @param string Airline IATA code
 * @return string Airline Name
 */
export function grabAirlineName(iata) {

    return new Promise((resolve, reject) => {
        airlines.filter(function (airline) {
            if (airline["IATACode"] == iata) {
                resolve(airline["Airline"]);
            }
        });
        reject('Unable to find Airline Iata Code');
    });
}

/**
 * Mutates airline data to add Airline name
 * @param array FlightData{}
 * @return string airline results
 */
export async function buildAirlineName(flightData) {
    await flightData.forEach(async (flight) => {
        let airlineName = 'NA';
        try {
            airlineName = await this.grabAirlineName(flight.airlines[0]);
        } catch (error) {
            console.log(error)
        }

        flight.airlineName = airlineName;
    });
}
