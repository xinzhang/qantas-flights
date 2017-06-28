var express = require('express');
var router = express.Router();
var Validator = require('schema-validator/Validator')

router.get('/flights', function(req, res, next) {
  res.send('flight arrived.')
  res.end
})

router.post('/flights/:airport?', function(req, res, next) {

    //validation for json body
    var flightsSchema = {
      flights: {
        type: Array,
        required: true
      }
    };

    var flightSchema = {
      flightNumber: {
        type: String,
        required: true
      },
      arrival: {
        type:Object,
        required:true,
        airport: {
          type:String,
          required: true
        }
      },
      departure: {
        type:Object,
        required:true,
        airport: {
          type:String,
          required: true
        }
      },
      airline: {
        type: String,
        required: true
      }

    }

    var validator = new Validator(flightsSchema);
    var itemValidator = new Validator(flightSchema);

    //check the array schemas first
    var check = validator.check(req.body);
    if (check._error) {
      console.log('failed at req.body');
      res.status(500).json({error: "Error parsing JSON"});
      return
    }

    let airport = req.params.airport||'SYD';
    let flights = req.body.flights;
    let resp = [];

    //loop the array to check each item
    flights.map(x=> {
      var check = itemValidator.check(x);
      if (check._error) {
        console.log('failed at here', x);
        res.status(500).json({error: "Error parsing JSON"});
        return
      }
    })

    flights.filter(x=>x.airline === 'QF'
      && (x.arrival.airport === airport || x.departure.airport === airport)
    ).map( x=> {
      resp.push({
        flight: x.flightSlug,
        origin: x.departure.airport,
        destination: x.arrival.airport,
        departureTime: x.departure.scheduled
      })
    })

    res.json(resp);
});

module.exports = router;
