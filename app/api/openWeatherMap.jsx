//axios.get takes a URL and fetch it bringing the result and it use promises
var axios = require('axios');
//Generate the base URL that we can use as a template
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';
//'http://api.openweathermap.org/data/2.5/weather?appid=aec813657795b9b897199d7488f38a0e&units=imperial';

module.exports = {
    getTemp: function(location) { // getTemp will return a promise
        var encodedLocation = encodeURIComponent(location);
        //use template strings `${}`.
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;


        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) { // that means something went wrong
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
  }


  //error that says : Cannot read property of 'then' of undefined
  // add return to axios to return promise in this special case.
