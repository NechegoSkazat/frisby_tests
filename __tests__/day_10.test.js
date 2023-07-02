const frisby = require("frisby");
const Joi = frisby.Joi;
const MOCK_URL = "https://2d486125-2426-4044-a9ae-9401bcf68d72.mock.pstmn.io"

describe("Day_10: Mock services", () => {
	it("GET mock", async function (){
	const userResult = await frisby
	.get(MOCK_URL)
	.expect("status", 407)
	.expect("jsonTypes", "error", {
		"name": "ErrorResponce",
		"message": "Something more interesting",
        "header": "notAHeader"
		})
	});
});

	