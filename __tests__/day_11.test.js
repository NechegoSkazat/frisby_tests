const frisby = require("frisby");
const Joi = frisby.Joi;
const BASE_URL = "https://water-ttl.herokuapp.com/hygrometer"


frisby.globalSetup({
	request: {
		timeout: 10000,
	},
});


describe("Day_11: Monitoring", () => {
	it("GET water level", async function (){
	const userResult = await frisby
	.get(BASE_URL)
	.expect("status", 200)
	.expect("jsonTypes",  {
		"level": Joi.number(),
		})
	const level = userResult.json.level;
	console.log(level)
	if (level <= 0.6) {
		const postResult = await frisby
		.post('https://water-ttl.herokuapp.com/water',{
			body: JSON.stringify({
        		duration: 10,
      			})
			})
		.expect("status", 200)
		}
	});
});

	