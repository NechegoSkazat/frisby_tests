const frisby = require("frisby");
const handlebars = require("handlebars");
const BASE_URL = "https://pokeapi.co/api/v2/type"
var template = `
    <style type="text/css">
        .tftable {font-size:14px;color:#333333;width:100%;border-width: 1px;border-color: #87ceeb;border-collapse: collapse;}
        .tftable th {font-size:18px;background-color:#87ceeb;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;text-align:left;}
        .tftable tr {background-color:#00FFEF;}
        .tftable td {font-size:14px;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;}
        .tftable tr:hover {background-color:#e0ffff;}
    </style>
    
    <table class="tftable" border="1">
        <tr>
            <th>Name</th>
            <th>URL</th>
        </tr>
        
        {{#each response.results}}
            <tr>
                <td>{{name}}</td>
                <td>{{url}}</td>
            </tr>
        {{/each}}
    </table>
`;

describe("Day_17: Visualizations", () => {
  
  var Template = handlebars.compile(template);

  it("Expect table to be returned", async () => {
    const response = await frisby
      .get(BASE_URL)
      .expect("status", 200);
    const data = response.json;
    const renderedHTML = Template({ response: data.results });

    expect(renderedHTML).toContain('table class="tftable"');

    console.log(renderedHTML);
  });
});