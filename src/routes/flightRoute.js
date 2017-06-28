var express = require('express');
var router = express.Router();

router.get('/flights', function(req, res, next) {
  res.send('flight arrived.')
  res.end
})

router.post('/flights/:airport?', function(req, res, next) {

    let airport = req.params.airport||'SYD';
    let flights = req.body.flights;
    
    let resp = [];

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
