const frisby = require("frisby");
const Joi = frisby.Joi;

frisby.globalSetup({
	request: {
		timeout: 10000,
	},
});

it('GET should return a status of 200 and check headers title and url', function (){
	return frisby
		.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10")
		.expect("status", 200)
		.expect('jsonTypes', '*', {
	        title: Joi.string(),
	        url: Joi.string(),})
		.then((result) => {
			let pics = result.json
				pics.forEach((pic) => {console.log(pic.title, pic.url)})
			});
		});