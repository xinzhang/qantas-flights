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
https://guarded-badlands-40160.herokuapp.com/flights/SYD
https://guarded-badlands-40160.herokuapp.com/flights/MEL

## To do
--------------
-  move the three processor to use stream based rather than array
-

## Screenshots

<img src="https://github.com/xinzhang/qantas-flights/blob/master//screenshots/home-1489717235747.png" alt="homepage" style="width: 200px;"/>
<img src="https://github.com/xinzhang/react-focus-commerce/blob/master//screenshots/products-cart-1489717372990.png" alt="shopping cart" style="width: 200px;"/>
<img src="https://github.com/xinzhang/react-focus-commerce/blob/master//screenshots/admin-products-1489717410219.png" alt="admin products" style="width: 200px;"/>
<img src="https://github.com/xinzhang/react-focus-commerce/blob/master//screenshots/admin-newproduct-1489717420922.png" alt="admin new" style="width: 200px;"/>
