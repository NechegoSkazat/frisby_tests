const frisby = require("frisby");
const moment = require("moment");
var words = require('random-words-typed');
const BASE_URL = "https://icanhazdadjoke.com/search";
const SECOND_URL = "http://worldtimeapi.org/api/ip";
const random_word = words();


frisby.globalSetup({
  request: {
    timeout: 10000,
  },
});

describe("Day_24: Using libraries", () => {
  it("GET return page with dadjokes including random word", async () => {
      console.log(random_word);
      const response = await frisby
        .get(`${BASE_URL}?term=${random_word}`)
        .expect('status', 200)
        .expect('bodyContains', random_word);
    });

  it("GET today and return +2 days", async () => {
      const response = await frisby
        .get('http://worldtimeapi.org/api/ip')
        .expect('status', 200);
        let today = response.json.datetime;
        let output = moment(today).add(2, 'days').format('dddd');
        console.log(output)
    });
})


