
This project is built to demonstrate an express based rest api for posting the json data and get json response.

This project is deployed in Heroku

or you can run it locally by run "node ./src/server.js"
then post the json request to http://localhost:5001/flights, which will return or SYD related flight for QF
alternatively you can post the json request to http://localhost:5001/flights/MEL, to get the MEL related flight for QF

also there is a mocha test to validate
(need to run "npm install mocha -g") <br/>
mocha -R spec flights.spec.js

## Features:
- allow optional parameters
- good structure to separate the server and route
- unit test included
- add the json schema validator
- heroku integrated

## Heroku Demo Address: (Heroku git)
https://guarded-badlands-40160.herokuapp.com/flights/<br/>
<br/>
Post to the below address with the JSON data:<br/>
https://guarded-badlands-40160.herokuapp.com/flights/SYD<br/>
https://guarded-badlands-40160.herokuapp.com/flights/MEL<br/>

## Heroku Demo Address: (github integration)
https://qantas-flights.herokuapp.com/flights/ <br/>
https://qantas-flights.herokuapp.com//flights/SYD <br/>
https://qantas-flights.herokuapp.com//flights/MEL <br/>

## To do
-  move the three processor to use stream based rather than array

## Screenshots
(the screens shots are from postman) <br/>
<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/1.png" alt="Default" width="500" style="width: 200px;"/>
<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/2.png" alt="SYD" width="500"  style="width: 200px;"/>
<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/3.png" alt="MEL" width="500" style="width: 200px;"/>
<br/>
JSON data sent with errors <br/>
<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/4.png" alt="Error" width="500"  style="width: 200px;"/>
<img src="https://github.com/xinzhang/qantas-flights/blob/master/screenshot/5.png" alt="Errpr" width="500" style="width: 200px;"/>
