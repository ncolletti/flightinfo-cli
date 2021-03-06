# Flight Info CLI

Handy CLI tool I'm using while travling. Can't be bothered with using heavy websites to get quick flight info.

## TODO
- [X] Complete all required dialogue messages
- [ ] Add Services to check for prices from skypicker
- [ ] Create a basic front-end view for Flight Changes
- [ ] Use a flight api for existing trip information. Skypicker npm?

## Limitations / Gotchas / Thoughts
- Since I am using this for my own flights, this currently only works for 1 passenger
- Didn't realize there was a [skypicker npm package](https://www.npmjs.com/package/skypicker) until I already built the url parsing for their http endpoint.

## Feature Ideas
- Add a tracker to cron a job to check prices periodically and notify when the best price/flight combo is found.
- Add a flight changes notifier. register with sms, email, or view on a webpage for up to date changes.

## Installation
```
git clone https://github.com/ncolletti/flightinfo-cli
npm install
npm run build
npm link
```

## Usage
In Terminal run:
```flight-info```
Then follow the prompts!
```
OR use args:
'-i, --info-only <flight_code>', 'Retrieve time, terminal, delay etc info'
'-s, --start-airport <iata_code>', 'Departure airport'
'-e, --end-airport <iata_code>', 'Arrival airport'
'-t, --trip-type <one-way or round-trip>', 'One way or Round trip'
'-d, --departure-date <date>', 'Departure date'
'-a, --arrival-date <date>', 'Arrival date'
'-d, --direct-only <Boolean>', 'Direct flights only, default false'
'-b, --best-price <Boolean>', 'Best Price Mode. Find better prices slightly outside your travel dates'
'-j, --top-airlines <Int>', 'Only display airlines with reviews above given number'
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Credits

Much love to [jaebradley](https://github.com/jaebradley) for many cool CLI tools as inspiration to this project.

## License

MIT