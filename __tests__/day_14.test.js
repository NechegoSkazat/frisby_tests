const frisby = require("frisby");
const Joi = frisby.Joi;
const BASE_URL = "https://api.github.com/user/repos";
const TOKEN = "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";

frisby.globalSetup({
	request: {
		timeout: 10000,
	},
});


describe("Day_14: OAuth", () => {
	it("Contains collections", function (){
		return frisby
			.fetch(`${BASE_URL}`, {
				headers:{
				Authorization: `Bearer ${TOKEN}`,
				},
			})
			.expect("status", 200)
			.expect('bodyContains', 'NechegoSkazat')
		});
	});