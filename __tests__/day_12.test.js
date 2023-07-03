const frisby = require("frisby");
const Joi = frisby.Joi;
const BASE_URL = "https://api.getpostman.com/"
const environmentID = '20832208-3dcd0630-2559-4e1f-9484-be1f9a889a76'
const collectionID = '20832208-17879ab3-0e4e-4461-91b1-24092904ef10'
const workspaceID = '1483065f-16f0-4fe3-8cbd-5f6358a55f98'
const API_KEY = "PMAK-649827cf0c4589002a462f93-668e88df3613ed64cab0316bc502278b4c"

describe("Day_12: Postman API", () => {
	it("GET a collection", function (){
	return frisby
	.get(`${BASE_URL}collections/${collectionID}`, {headers:{
		"x-api-key": API_KEY,
	}})
	.expect("status", 200)
	.expect("jsonTypes", "collection.info", {"name": "Day 12: Postman API"})
	});

	it("GET an environment", function (){
	return frisby
	.get(`${BASE_URL}environments/${environmentID}`, {headers:{
		"x-api-key": API_KEY,
	}})
	.expect("status", 200)
	.expect("jsonTypes", "environment", {"name": "Postman API env"})
	});

	it("GET a workspace", function (){
	return frisby
	.get(`${BASE_URL}workspaces/${workspaceID}`, {headers:{
		"x-api-key": API_KEY,
	}})
	.expect("status", 200)
	.expect("jsonTypes", "workspace", {"name": "ANKO QA Internship"})
	});
});



	