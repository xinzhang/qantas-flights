var express = require('express');
var router = express.Router();

var flightsSchema = require('../schemas/flightsSchema');
var flightSchema = require('../schemas/flightSchema');
var Validator = require('schema-validator/validator');

router.get('/flights', function(req, res, next) {
  res.send('flight arrived.')
})

router.post('/flights/:airport?', function(req, res, next) {

    //validation for json body
    var validator = new Validator(flightsSchema);
    var itemValidator = new Validator(flightSchema);

    //check the array schemas first
    var check = validator.check(req.body);
    if (check._error) {
      res.status(500).json({error: "Error parsing JSON"});
      return
    }

    //get passed in data
    let airport = req.params.airport||'SYD';
    let flights = req.body.flights;

    //loop the array to check each item match schema
    var isValid = flights.reduce((val, x) => {
      var check = itemValidator.check(x);
      return val && check._error
    }, true);

    //check the result
    if (isValid) {
      return res.status(500).json({error: "Error parsing JSON"});
    }

    //filter the data and transform for response
    var result = flights.filter(x => x.airline === 'QF' && (x.arrival.airport === airport || x.departure.airport === airport))
      .map( x=> {
        return {
          flight: x.flightSlug,
          origin: x.departure.airport,
          destination: x.arrival.airport,
          departureTime: x.departure.scheduled
        }
    })

    res.json(result);

});

module.exports = router;
