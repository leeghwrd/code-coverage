/**
  * @desc search url for matching string
  * @param array inputArr - the array of urls
  * @param string inputArr - the array of urls
  * @return [object Array] - return object(s) matching regular expression
*/
const filterSearch = (inputArr, searchTerm) => {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!inputArr.length) throw Error("inputArr cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

module.exports = filterSearch;