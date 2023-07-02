const frisby = require("frisby");
const Joi = require("joi");
const BASE_URL = "https://joyce-spotify-graphql.herokuapp.com/graphql"
var graphQLquery = `
    query getByArtist($name: String!) {
    queryArtists (byName: $name) {
        name
        image
        albums {
            name
        }
        name
        image
        albums {
            name
        }
    }
}`;

var variables = '{"name": "Dua Lipa"}'

describe("Day_19: GraphQL", () => {
  it("Expect selected artist return", async () => {
    const response = await frisby
        .post(BASE_URL, {body: JSON.stringify({
            query: `${graphQLquery}`,
            variables: `${variables}`
          })
    })
        .expect("status", 200)
        .expect("bodyContains", "Dua Lipa");
  });
});