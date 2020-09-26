module.exports.function = function find_All_Team () {

  var console = require('console');
  const http = require ("http");

  TeamID = [ 7698, 4402, 7692, 4407, 4523, 7699, 7693, 4525, 4410, 4406, 4405, 4403, 7694, 4524, 4404, 4409, 4408, 7695, 7696, 7697 ]

  let options = {
    format: 'json',
    header: {
      'accept': 'application/json'
    },
  };
  
  result = []
  for (let i = 0; i < TeamID.length; ++i) {
    // console.log('https://api.overwatchleague.com/v2/teams/' + TeamID[i])
    var response = http.getUrl('https://api.overwatchleague.com/v2/teams/' + TeamID[i] , options);
    data = response.data
    var TeamInfo = {
      team_name: data.name,
      player: data.players,
      social_media: data.accounts
    }
    result.push(TeamInfo);
  }

  console.log(result)

  return result
}