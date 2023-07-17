const frisby = require("frisby");
const TEST_URL = "https://google.com/";

jest.setTimeout(15000);

describe("Day_28: UI testing", () => {
  var start = new Date();
  it("GET response time < 1000", async () => {
      const response = await frisby
        .get(`${TEST_URL}`)
        .expect('status', 200);
        response_time = (new Date() - start);
        console.log('Rensponse time is', response_time);
        expect(response_time).toBeLessThan(1000)     
      });    

  it("GET lighthouse performance score >= 90", async () => {
      const response = await frisby
        .get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${TEST_URL}`)
        .expect('status', 200);
        score = (response.json.lighthouseResult.categories.performance['score'] * 100);
        console.log('Performance score is', score);
        expect(score).toBeGreaterThan(89)     
      });    
  });


