
import axios from 'axios';

function buildUrl(trip) {

    const kiwiParamMap = {
        'depart': 'fly_from',
        'arrive': 'fly_to',
        'dateFrom': 'date_from',
        'dateArriveBack': 'date_to',
        'currency': 'curr',
        'type': 'flight_type',
        'checkedBag': 'adult_hand_bag',
        'carryOnBag': 'adult_hold_bag',
        'passengers': 'adults',
        'maxPrice': 'price_to',
        'cabinType': 'selected_cabins',
        'directOnly': 'max_stopovers'
    }
    //TODO: add logic to figure out multiple bags for multiple passengers

    let url = 'https://api.skypicker.com/flights?'
    let end = '&partner=kiwi&v=3'

    //TODO: break this out. a lot of DRY
    for (let [key, value] of Object.entries(trip)) {
        if(value && kiwiParamMap.hasOwnProperty(key)) {
            url = url.concat(`&${kiwiParamMap[key]}=${value}`)
        }
    }

    for (let [key, value] of Object.entries(trip.advancedOptions)) {
        if(value && kiwiParamMap.hasOwnProperty(key)) {
            url = url.concat(`&${kiwiParamMap[key]}=${value}`)
        }
    }

    for (let [key, value] of Object.entries(trip.bags)) {
        if(value && kiwiParamMap.hasOwnProperty(key)) {
            url = url.concat(`&${kiwiParamMap[key]}=${value}`)
        }
    }

    return url.concat(end);
}

function parseResponse(response) {
    return JSON.parse(JSON.stringify(response))
}


// TODO: parse this out to other functions and instantiate a KiwiResult class from API
export async function testApi(trip) {

    const endpoint = buildUrl(trip)
    // console.log('NSC: testApi -> endpoint', endpoint);
    let flightData = '';

    try {
        flightData = await axios.get(endpoint)
    } catch (err) {
        console.log('Error from Kiwi API: ', err)
        return false;
    }

    return flightData
}

// TODO: need a method that reads trip class to determine if it's one-way or round-trip - format kiwi url with new fields
// &dateTo =
