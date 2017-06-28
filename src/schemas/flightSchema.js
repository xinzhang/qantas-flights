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

module.exports = flightSchema;
