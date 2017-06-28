This project is built for demostration to express rest api to post a json data and get response.

This project is deployed in heroku

or you can run it locally by node server.js
then post the json request to http://localhost:5001/flights, which will return or SYD related flight for QF
alternatively you can post the json request to http://localhost:5001/flights/MEL,to get the MEL related flight for QF

also there is a mocha test to validate
(maybe need to install mocha -g)
mocha -R spec flights.spec.js

## Features:
- allow optional parameters
- good structure to separate the server and route
- unit test included
- add the json schema validator
- heroku integrated

## Heroku Demo Address:
https://guarded-badlands-40160.herokuapp.com/flights/
<br/>
https://guarded-badlands-40160.herokuapp.com/flights/SYD
<br/>
https://guarded-badlands-40160.herokuapp.com/flights/MEL
<br/>

## To do
--------------
-  move the three processor to use stream based rather than array

## Screenshots

<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/1.png" alt="Default" width="200" style="width: 200px;"/>
<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/2.png" alt="SYD" width="200"  style="width: 200px;"/>
<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/3.png" alt="MEL" width="200" style="width: 200px;"/>
<br/>
<br/>
<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/4.png" alt="Error" width="200"  style="width: 200px;"/>
<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/5.png" alt="Errpr" width="200" style="width: 200px;"/>
