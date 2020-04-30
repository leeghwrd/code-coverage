const filterSearch = require("../src/filterSearch");

const urls = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" }
  ];

  console.log(filterSearch(urls, "link"));
  
