This project is built for demostration to express rest api to post a json data and get response.

This project is deployed in heroku

or you can run it locally by node server.js
then post the json request to http://localhost:5001/flights, which will return or SYD related flight for QF
alternatively you can post the json request to http://localhost:5001/flights/MEL,to get the MEL related flight for QF

also there is a mocha test to validate
mocha -R spec flights.spec.js

Features:
- allow optional paramters
- good structure to sepearate the server and routes
- unit test included
- heroku integrated

Todo:
--------------
- consider to use some JSON schema validator
