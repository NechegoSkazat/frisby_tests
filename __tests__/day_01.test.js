const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Day_01: Fork a collection", () => {
	it('POST should return a status of 200 and users payload', function (){
	return frisby.post('https://postman-echo.com/post', {
    "payload": "hello world"
	})
		.expect("status", 200)
		.expect("json", "json", {payload: "hello world"})
	});
});