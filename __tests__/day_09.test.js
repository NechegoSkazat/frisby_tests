const frisby = require("frisby");
const Joi = frisby.Joi;
const BASE_URL = "https://randomuser.me/api"
const POST_URL = "https://postman-echo.com/post"

frisby.globalSetup({
	request: {
		timeout: 10000,
	},
});

it("POST should return data taken from GET", async function (){
	const userResult = await frisby
	.get(BASE_URL)
	.expect("status", 200)
	.expect("jsonTypes", "results.0", {
		gender: Joi.string(),})
	.expect("jsonTypes", "results.0.name", {
		first: Joi.string(),
		last: Joi.string(),
	});
	const user = userResult.json.results[0];
	await frisby.post(POST_URL, {
			name: `${user.name.first} ${user.name.last}`,
			email: user.email,
			id: user.id 
		})
		.expect("jsonTypes", "data", {
			name: `${user.name.first} ${user.name.last}`,
			email: user.email,
			id: user.id});
	});

	