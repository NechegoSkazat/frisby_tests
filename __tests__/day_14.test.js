const frisby = require("frisby");
const Joi = frisby.Joi;
const BASE_URL = "https://api.github.com/user/repos";
TOKEN = process.env.GH_TOKEN

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