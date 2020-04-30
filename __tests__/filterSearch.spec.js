const filterSearch = require("../src/filterSearch");

const input = [
  { id: 1, url: "https://www.url1.dev" },
  { id: 2, url: "https://www.url2.dev" },
  { id: 3, url: "https://www.link3.dev" }
];

describe("Filter function", () => {

  // TEST 1
  test("it should filter by a search term (link)", () => {
  
    const output = [{ id: 3, url: "https://www.link3.dev" }];
    expect(filterSearch(input, "link")).toEqual(output);
    expect(filterSearch(input, "LINK")).toEqual(output);
  });
  
  // TEST 2
  test("it should filter by a search term (uRl)", () => {
    // actual test
  
    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];
    expect(filterSearch(input, "uRl")).toEqual(output);
  
  });

  //TEST 3
  test("it should throw when searchTerm is empty string", () => {
   
    expect(() => {
      filterSearch(input, "");
    }).toThrowError(Error('searchTerm cannot be empty'));
  });
  
  // TEST 4
  test("it should throw when inputArr is empty", () => {
    let input = [];
    expect(() => {
      filterSearch(input, "searchTerm");
    }).toThrowError(Error('inputArr cannot be empty'));
  });

});
