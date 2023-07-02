const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Day_04: Authorization", () => {
	it('GET should return a status of 200', function (){
	return frisby.get('https://api.getpostman.com/collections', {headers:  {           
    "x-api-key": "PMAK-649827cf0c4589002a462f93-668e88df3613ed64cab0316bc502278b4c"
}})
		.expect("status", 200)
		.expect("jsonTypes", "collections.*", {
		id: Joi.string(),
        name: Joi.string(),
        owner: Joi.string(),
        createdAt: Joi.string(),
        updatedAt: Joi.string(),
        uid: Joi.string(),
    	fork: Joi.object(),
    	isPublic: Joi.boolean(),})
	});

it('GET should return a status of 200', function (){
	return frisby.get('https://api.getpostman.com/collections?apikey=PMAK-649827cf0c4589002a462f93-668e88df3613ed64cab0316bc502278b4c')
		.expect("status", 200)
		.expect("jsonTypes", "collections.*", {
		id: Joi.string(),
        name: Joi.string(),
        owner: Joi.string(),
        createdAt: Joi.string(),
        updatedAt: Joi.string(),
        uid: Joi.string(),
    	fork: Joi.object(),
    	isPublic: Joi.boolean(),})
	});
});