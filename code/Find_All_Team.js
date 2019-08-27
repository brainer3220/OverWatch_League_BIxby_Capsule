module.exports.function = function find_All_Team (Team_Name) {

  const dates = require("console");
  const http = require ("http");

  let Team_Name = []
  let ret = []

  let options = {
    format: 'json',
    header: {
      'accept': 'application/json'
    },
  };

  let response = http.getUrl('https://api.overwatchleague.com./v2/teams', options);
  console.log(response)

  return {}
}
