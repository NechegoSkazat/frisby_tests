const frisby = require("frisby");
const coindeskBaseUrl = "https://api.coindesk.com";
const currency = "btc";

it('GET should return a status of 200', function (){
	return frisby.get(coindeskBaseUrl + '/v1/bpi/currentprice/' + currency + '.json')
		.expect("status", 200)
	});

