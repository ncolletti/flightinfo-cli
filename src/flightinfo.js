#!/usr/bin/env node

import program from 'commander';
import SelectionGrabber from './modules/SelectionGrabber';
import pkg from '../package.json';

program
    .version(pkg.version)
    .description('Flight info at your fingertips!');

program
    .option('-i, --info-only <flight_code>', 'Retrieve time, terminal, delay etc info')
    .option('-s, --start-airport <iata_code>', 'Departure airport')
    .option('-e, --end-airport <iata_code>', 'Arrival airport')
    .option('-t, --trip-type <one-way or round-trip>', 'One way or Round trip')
    .option('-d, --departure-date <date>', 'Departure date')
    .option('-a, --arrival-date <date>', 'Arrival date')
    .option('-d, --direct-only <Boolean>', 'Direct flights only, default false')
    .option('-b, --best-price <Boolean>', 'Best Price Mode. Find better prices slightly outside your travel dates')
    .option('-j, --top-airlines <Int>', 'Only display airlines with reviews above given number')
    .action(async (command) => {
        try {
            const options = command.opts();
            // new up Class to parse cli args
            // new up Class to Search based on options
            const selectionGrabber = new SelectionGrabber();
            await selectionGrabber.run();
        } catch (e) {
            console.error(`Eerror: ${e}`);
        }
    });


program.parse(process.argv);
