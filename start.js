var express = require('express');
var app = express();
var request = require('request');

app.use(express.static(__dirname + '/public'));

// Define localhost:3000/weather endpoint.
app.get('/weather', function (req, res) {
    // Request data from another server. HTML in this case but could request JSON from a JSON API
    //request('https://weather.com/weather/tenday/l/Seattle+WA+USWA0395:1:US', function (error, response, body) {
    request('https://api.darksky.net/forecast/afcc669d8ca63e45bb1b78bbc380cb0b/47.608013,-122.335167?exclude=currently,hourly,minutely', function (error, response, body) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // Send the error if there's an error or the response data if not
        res.send(error || body);
    });
})

app.get('/json', function(req, res) {
    res.send({
        weather: 'sunny',
        temp: 51
    });
})

app.get('*', function(req, res) {
    //res.sendFile( __dirname + "/" + "index.html" );
    res.sendFile("./public/index.html");
})

app.listen(1234, function () {
  console.log('Example app listening on port 1234!')
})
