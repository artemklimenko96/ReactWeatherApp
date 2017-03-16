var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=8a83daf267cfbe691c3cacc62eb7d296';
module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}}`;
  return  axios.get(requestUrl).then(function(res){
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
        }else{
          return res.data.main.temp;
        }
    },
  function (err){
    throw new Error(err.response.data.message);
  });
  }
};
