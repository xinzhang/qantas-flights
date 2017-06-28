var request = require('supertest');
var assert = require('assert');

var Validator = require('schema-validator/Validator')

var fs = require('fs');
var path = require('path');
let testJsonPath = path.resolve(__dirname, '../src/json/request.json')

function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

describe('testing flights api', function () {
  var server;

  beforeEach(function () {
    server = require('../src/server');
  });

  afterEach(function () {
    server.close()
  });

  it('responds to /', function testSlash(done) {
    request(server)
      .get('/flights')
      .expect(200, done);
    });

  it('responds to SYD', function testSydFlight(done) {
    var jsonBody = readJSONFile(testJsonPath, function(err, data){
      if (err) { throw err; }
      request(server)
        .post('/flights')
        .send(data)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
           if (err) done(err);
           assert.ok(res.body.length > 1);
           done();
         });
      });
    });

  it('responds to unexpected json', function testErrorJson(done) {
        request(server)
          .post('/flights')
          .send({"flights":[{"flightNumber":"abc"}]})
          .expect(500, done)
  });

  it('responds to malformated json', function testMalformatedJson(done) {
        let malformat_str = '{"flights": ["flightNumber": "801","airport": "PER,"scheduled": "2017-06-21T01:00:00Z"}'
        request(server)
          .post('/flights')
          .send(malformat_str)
          .expect(500)
          .end(function(err, res) {
            if (err) done(err);
            assert.equal(JSON.parse(res.error.text).error, "Error parsing JSON");
            done();
          })
  });

});
