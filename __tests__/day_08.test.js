const frisby = require("frisby");
const Joi = frisby.Joi;
const BASE_URL = "https://randomuser.me/api"
const gender = 'female'
const nation = 'FR'

frisby.globalSetup({
	request: {
		timeout: 10000,
	},
});

it("GET should return random user", function (){
	return frisby
		.get(`${BASE_URL}`)
		.expect("status", 200)
		.expect("jsonTypes", "results.0", {
			gender: Joi.string(),})
		.expect("jsonTypes", "results.0.name", {
			first: Joi.string(),
			last: Joi.string(),
	       });
		});

it("GET should return random female user", function (){
	return frisby
		.get(`${BASE_URL}?gender=${gender}`)
		.expect("status", 200)
		.expect("jsonTypes", "results.0", {
			gender: gender,});
		});

it("GET should return random french female user", function (){
	return frisby
		.get(`${BASE_URL}?gender=${gender}&nat=${nation}`)
		.expect("status", 200)
		.expect("jsonTypes", "results.0", {
			gender: gender,
			nat: nation,});
		});