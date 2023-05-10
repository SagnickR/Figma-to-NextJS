const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
  params: {
    Category: 'soccer',
    Timezone: '-7'
  },
  headers: {
    'X-RapidAPI-Key': '72c70b09c1msha23c9d7da2d063cp141e4fjsn4a1ed14da6dc',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}