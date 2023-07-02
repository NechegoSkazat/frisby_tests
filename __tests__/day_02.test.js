const frisby = require("frisby");
const BASE_URL = "https://postman-echo.com";

describe("Day_2: Collections and environments", () => {
    it("POST raw text", () => {
          return frisby
            .post(`${BASE_URL}/post`)
            .expect('status', 200);
        });

    it("GET with query params", () => {
          return frisby
            .get(`${BASE_URL}/get?name&ferret`)
            .expect('status', 200);
        })
    });