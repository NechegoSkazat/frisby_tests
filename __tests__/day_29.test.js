const frisby = require("frisby");
const BASE_URL = "https://postman-echo.com/post";
let newPayload = {};
const workspaceId = "1483065f-16f0-4fe3-8cbd-5f6358a55f98";
const webhookName = "echo webhook";
const collectionUid = "20832208-bbdf7137-237a-44e3-b491-5a70c09bbf25";
const x_api_key = "PMAK-649827cf0c4589002a462f93-668e88df3613ed64cab0316bc502278b4c"

jest.setTimeout(15000);

describe("Day_29: Webhooks", () => {  
  it("Create webhook", async () => {
      const response = await frisby
        .post(`https://api.getpostman.com/webhooks?workspace=${workspaceId}`, 
          {headers: {
              "x-api-key": x_api_key,
              },
          body: {
           "webhook":{
              "name": `${webhookName}`,
              "collection": `${collectionUid}`
              }
            }         
          })
        .expect('status', 200);
        console.log(response.body)    
  });

  it("Trigger the webhook", async () => {
  const response = await frisby
    .post('https://newman-api.getpostman.com/run/20832208/015fcf84-15fe-4664-9bff-eff4050fd0ac', 
      {body: {
          "message": "yellow world"
          }})
    .expect('status', 200)    
    });       
  });


