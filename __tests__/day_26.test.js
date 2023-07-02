const frisby = require("frisby");
const cheerio = require("cheerio");
const BASE_URL = "https://www.bing.com/search";
const request = 'word';
const links = [];

frisby.globalSetup({
  request: {
    timeout: 10000,
  },
});

describe("Day_26: Parse HTML response", () => {
  it("GET collect links from page", async () => {
      const response = await frisby
        .get(`${BASE_URL}?q=${request}`)
        .expect('status', 200);
        const $ = cheerio.load(response.body);
        const linkObjects = $('h2 a');
        linkObjects.each((index, element) => {
              links.push($(element).attr('href'));
      });
    console.log(links);
    expect(Array.isArray(links)).toBe(true)   
    });
})


