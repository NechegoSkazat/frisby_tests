const frisby = require("frisby");
const Joi = frisby.Joi;
const BASE_URL = "https://swapi.dev/api"

frisby.globalSetup({
	request: {
		timeout: 10000,
	},
});


describe("Day_13: Newman", () => {
	it("Contains Tatooine", function (){
		return frisby
			.get(`${BASE_URL}/planets`)
			.expect("status", 200)
			.expect('bodyContains', 'Tatooine')
	});

	it("Contains Ewokese", function (){
	return frisby
		.get(`${BASE_URL}/species`)
		.expect("status", 200)
		.expect('bodyContains', 'Ewokese')
		.then ((result) => {
			const planets = result.json.results;
			const talls = planets.reduce((total,x) => total+(x.average_height>100), 0)
			expect(talls).toBe(7)
		})
	});
});
