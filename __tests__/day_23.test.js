const frisby = require("frisby");
var fs = require('fs');
const BASE_URL = "https://postman-echo.com/get";

var data = fs.readFileSync('__tests__/geoMap.csv')
    .toString() 
    .split('\n') 
    .map(e => e.trim())
    .map(e => e.split(',').map(e => e.trim())); 


describe("Day_23: Data files", () => {
    it.each(data.slice(1))("GET return status 200", async (region, boba) => {
          console.log(region, boba);
          await frisby
            .get(`${BASE_URL}?${region}=${boba}`)
            .expect('status', 200);
        })
    });