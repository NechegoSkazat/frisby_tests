const frisby = require("frisby");
const cheerio = require("cheerio");
const BASE_URL = "http://security.postman-breakable.com";
const user = 'prpp';
const password = 'popopo';
const credentials = JSON.stringify({
    username: `${user}`,
    password: `${password}`
});
let user_id = '';
let token = '';


frisby.globalSetup({
  request: {
    timeout: 10000,
  },
});

describe("Day_27: Scenario testing", () => {
  it("POST create user", async () => {
      const response = await frisby
        .post(`${BASE_URL}/user`, {body: credentials})
        // .expect('status', 200);  /// if username is free
        .expect('status', 403);     
      });

  it("POST user login", async () => {
      const response = await frisby
        .post(`${BASE_URL}/user/login`, {body: credentials})
        .expect('status', 200);
        user_id = response.json.response['user_id'];
        token = response.json.response['session_token'];
        console.log(user_id, token)        
      });

  it("GET user information", async () => {
      const response = await frisby
        .get(`${BASE_URL}/user`, {headers: {
          'x-api-key': `${token}`
        }})
        .expect('status', 200);
        console.log(response.json.response)    
      }); 

  it("GET account summary", async () => {
      const response = await frisby
        .get(`${BASE_URL}/account/${user_id}/summary`, {headers: {
          'x-api-key': `${token}`
        }})
        .expect('status', 200);
        console.log(response.json.response)    
      }); 

  it("GET user logout", async () => {
    const response = await frisby
      .get(`${BASE_URL}/user/logout`, {headers: {
        'x-api-key': `${token}`
      }})
      .expect('status', 200);
      console.log(response.json.response)    
    });          

  it("GET account summary after logout", async () => {
      const response = await frisby
        .get(`${BASE_URL}/account/${user_id}/summary`, {headers: {
          'x-api-key': `${token}`
        }})
        .expect('status', 403);
        console.log(response.body)    
      });     
  });


