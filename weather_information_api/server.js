const express = require('express');
const axios = require('axios');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const port = 5000;


const apiKey = process.env.API;


app.get('/weather/:query', async (req,res) => {
	const query = req.params.query;


	try {
		// for fetching data
		const response = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
			params: {
				key: apiKey,
				q: query
			}
		});

		const weatherData = response.data;


		res.json({
	    location: weatherData.location.name,
            region: weatherData.location.region,
            country: weatherData.location.country,
            temperature_c: weatherData.current.temp_c,
            temperature_f: weatherData.current.temp_f,
            condition: weatherData.current.condition.text,
            wind_mph: weatherData.current.wind_mph,
            wind_kph: weatherData.current.wind_kph,
            humidity: weatherData.current.humidity,
            last_updated: weatherData.current.last_updated
        });
	} catch (error) {
		if(error.response) {
			res.status(error.response.status).send(error,response,data.error.message);

		} else {
			res.status(500).send("Erroor bro fix it asap");
		}
	}
});


app.listen(port, () => {
	console.log(`server running on port ${port}`);
});




