import * as utils from '../utils';

/** Encapsulate all data and logic for a Trip within this class */
export default class Trip {
    constructor(departAirport, arriveAirport, flightType, departDate) {
        this.depart = departAirport;
        this.arrive = arriveAirport;
        this.type = flightType;
        this.dateFrom = departDate;
        //TODO: add logic to figure out for multiple passengers
        this.passengers = 1;
        this.advancedOptions = {};
        this.bags = {};
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
        return false;
    }

    setAdvancedOptions({name, data}) {
        this.advancedOptions[name] = data
    }

    fixCabinValue(){
        // set direct flights to kiwi scheme
        if(this.advancedOptions && this.advancedOptions.directOnly) {
            this.advancedOptions.directOnly = 0;
        }
    }

    fixDateValues() {
        this.dateFrom = utils.dateSwap(this.dateFrom);
        if (this.type !== 'oneway') {
            this.dateArriveBack = utils.dateSwap(this.dateArriveBack);
        }
    }

    getStatus() {
        return `The currrent trip is set to leave from ${this.depart} on ${this.dateFrom} on a ${this.type} flight.`
    }

}