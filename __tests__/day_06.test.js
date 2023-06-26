const frisby = require("frisby");
const coindeskBaseUrl = "https://api.coindesk.com";
const currency = "btc";

it('GET should return a status of 200', function (){
	return frisby.get("https://icanhazdadjoke.com/")
		.expect("status", 200)
	});

it('GET should not return a status of 404', function (){
	return frisby.get("https://icanhazdadjoke.com/")
		.expectNot("status", 404)
	});

