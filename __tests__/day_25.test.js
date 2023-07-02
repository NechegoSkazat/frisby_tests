const frisby = require("frisby");
const Joi = require("Joi");
const BASE_URL = "https://postman-echo.com/post";
const { faker } = require('@faker-js/faker');
let payload = {};
const random_hex = faker.internet.color();

frisby.globalSetup({
  request: {
    timeout: 10000,
  },
});

describe("Day_25: Dynamic request bodies", () => {
  it("GET return color data", async () => {
      const response = await frisby
        .get(`https://www.thecolorapi.com/id?hex=${random_hex.slice(1)}`)
        .expect('status', 200);
      const rgb = response.json.rgb['value'];
      const name = response.json.name["value"];
      payload = JSON.stringify({
        hex: `${random_hex}`, 
        rgb: `${rgb}`, 
        name:`${name}`});
    });

  it("POST return echo", async () => {
      const response = await frisby
        .post('https://postman-echo.com/post', {body: payload})
        .expect('status', 200)
        .expect('jsonTypes', 'json', {
          hex: Joi.string().required(),
          rgb: Joi.string().required(),
          name: Joi.string().required(),
        });
    });
})


