"use strict";

const stream = require('stream');

class ValidatorStream extends stream.Readable {
  constructor(options) {
    super(options);
  }

  _read(size) {

    this.push(chunk, 'utf8');             //[2]
    if(chance.bool({likelihood: 5})) {    //[3]
      this.push(null);
    }
  }


}

module.exports = RandomStream;
