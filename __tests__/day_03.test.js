const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Day_03: Add request details", () => {
	it('POST should return a status of 200 and users data', function (){
	return frisby.post('https://postman-echo.com/post', {
	    "data": "doodles"
		})
		.expect("status", 200)
		.expect("json", "json", {data: "doodles"})
	});
});