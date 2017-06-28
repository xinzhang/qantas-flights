This project is built for demostration to express rest api to post a json data and get response.

This project is deployed in heroku

or you can run it locally by node server.js
then post the json request to http://localhost:5001/flights, which will return or SYD related flight for QF
alternatively you can post the json request to http://localhost:5001/flights/MEL,to get the MEL related flight for QF

also there is a mocha test to validate
(maybe need to install mocha -g)
mocha -R spec flights.spec.js

Features:
- allow optional parameters
- good structure to separate the server and route
- unit test included
- add the json schema validator
- heroku integrated

Todo:
--------------
-  move the three processor to use stream based rather than array 
-
