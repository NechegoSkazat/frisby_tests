const frisby = require("frisby");
const Joi = frisby.Joi;
const BASE_URL = 'http://xkcd.com/';
let page = 0;
let status = 200;

frisby.globalSetup({
	request: {
		timeout: 10000,
	},
});


describe("Day_16: Pagination", () => {
	it("GET should return status 200", async () =>{
		while (status == 200){
		page = ++page;
		const response = await frisby
			.get(`${BASE_URL}${page}/info.0.json`);
		status = response.status;
		console.log(page, status);
		};
		expect(page).toEqual(404);
	});
});