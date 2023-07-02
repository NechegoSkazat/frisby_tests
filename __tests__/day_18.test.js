const frisby = require("frisby");
const Joi = require("joi");
const BASE_URL = "https://2a6e0231-05f5-4028-8571-cbce1dcfb5b5.mock.pstmn.io"

describe("Day_18: API Specifications", () => {
  
  it("GET return status 200", async () => {
    const response = await frisby
      .get(`${BASE_URL}/cosmos`)
      .expect("status", 200)
      .expect("jsonTypes", "*", {
        "id": Joi.number(),
        "name": Joi.string(),
        "tag": Joi.string(),
        })
  });
});