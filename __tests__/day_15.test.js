const frisby = require("frisby");
const Joi = frisby.Joi;
const fs = require('fs');
const BASE_URL = "https://api.spacexdata.com/v4/launches/latest";
var data = {}

describe("Day_15: Write to file", () => {
	it("GET returns 200", async() => {
		await frisby
			.get(`${BASE_URL}`)
			.expect('status', 200)
			.then(function (res) {
			    const responseData = res.json;
			    const dataString = JSON.stringify(responseData);
			    fs.writeFile('__tests__/data.json', dataString, function (err) {
			      if (err) {
			        console.error('Error writing file:', err);
			      } else {
			        console.log('Data saved to file successfully.');
			      }
			      
			    });
  			})
	});

	it('Check if the file exists', function () {
	    const fileExists = fs.existsSync('__tests__/data.json');
    	expect(fileExists).toBe(true)
  });
})
