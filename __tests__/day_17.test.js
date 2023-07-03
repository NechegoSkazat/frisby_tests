const frisby = require("frisby");
const handlebars = require("handlebars");
const BASE_URL = "https://pokeapi.co/api/v2/type"

describe("Day_17: Visualizations", () => {
  it("Expect table to be returned", async () => {
    const response = await frisby
      .get(BASE_URL)
      .expect("status", 200);
    const data = response.json.results;
    console.table(data);
  });
});