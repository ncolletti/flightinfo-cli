/** Encapsulate all data and logic for a Trip within this class */
export default class Trip {
    constructor(departAirport, arriveAirport, flightType, departDate) {
        this.depart = departAirport;
        this.arrive = arriveAirport;
        this.type = flightType;
        this.dateFrom = departDate;

        this.advancedOptions = {};
    }

    set(prop, data) {
        if(this[prop]) {
            return false
        }
        this[prop] = data
    }

    get(prop) {
        if(this.hasOwnProperty(prop)) {
            return this[prop]
        }
    }

    setadvancedOptions({name, data}) {
        this.advancedOptions[name] = data
    }

    getStatus() {
        return `The currrent trip is set to leave from ${this.depart} on ${this.dateFrom} on a ${this.type} flight.`
    }

}