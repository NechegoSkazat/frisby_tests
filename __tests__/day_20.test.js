const frisby = require("frisby");
const Joi = require("joi");
const BASE_URL = "https://icanhazdadjoke.com/"

describe("Day_20: Documentation", () => {
  it("GET return status 200", async () => {
    const response = await frisby
        .get(BASE_URL, {headers: {
            Accept: 'application/json'
          }})
        .expect("status", 200)
        .expect("jsonTypes", {
            "id": Joi.string(),
            "joke": Joi.string(),
        });
  });
});