const request = require('request');

function getUserIdByNickname(nickname, apikey) {
    return new Promise(function (resolve, reject) {
        let url = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${apikey}&vanityurl=${nickname}`;
        request(url, (err, res, body) => {
            let respJson = JSON.parse(body);
            if(err || (respJson && respJson.response && respJson.response.success!== 1)
                || !(res.statusCode === 200|| res.statusCode === 304)){
                reject();
            } else {
                resolve(respJson.response.steamid);
            }
        })
    });
}

function makeSteamRequest(url){
  return  {
    method : 'get',
    url: url, //`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${userId}&format=json`,
    json: true
  };
}
function checkResponse(err, stResp, body){
  let resp = {};
  if(err){
    resp = {'error' : err.message};
  } else {
    switch(stResp.statusCode){
      case 403:
        resp = {'error' : 'not authorized'};
        break;
      case 500:
      case 502:
        resp = {'error': 'server problem'};
        break;
      default:
        resp = body ? body : {'error' : 'data not available'};
    }
  }
  return resp;
}

exports.userInfo = (req, res)=>{
  const apiKey = req.query.apikey;
  const nickname = req.query.nickname;
  getUserIdByNickname(nickname, apiKey).then(function (steamid) {
      let options =  makeSteamRequest(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamid}`);
      request(options, (err, steamRes, body) => {
          res.json(checkResponse(err, steamRes, body));
      });
  }, function () {
      res.json({'error': 'user not found'});
  })
};

exports.getUserApps = (req, res)=>{
  const apiKey = req.query.apikey;
  const userId = req.query.uid;
  let options = makeSteamRequest(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${userId}&include_appinfo=1&include_played_free_games=1&format=json`);
  request(options, (err, steamRes, body) => {
    res.json(checkResponse(err, steamRes, body));
  });
};

exports.getAppDetails = (req, res)=>{
  const appid = req.query.appid;
  request({
    method : 'get',
    url: `http://store.steampowered.com/api/appdetails/?appids=${appid}&cc=RU&l=russian`
  }, (err, steamRes, body) => {
    res.json(checkResponse(err, steamRes, body));
  });
};
