const frisby = require("frisby");
const BASE_URL = "https://icanhazdadjoke.com/";
const currency = "btc";

describe("Day_06: Tests", () => {
	it('GET should return a status of 200', function (){
	return frisby.get(BASE_URL)
		.expect("status", 200)
	});

it('GET should not return a status of 404', function (){
	return frisby.get(BASE_URL)
		.expectNot("status", 404)
	});
});

