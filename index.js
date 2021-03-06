var express = require('express');
var app = express();
var request = require('request');

app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 5000));

// Define localhost:3000/weather endpoint.
app.get('/weather', function (req, res) {
    request('https://api.darksky.net/forecast/afcc669d8ca63e45bb1b78bbc380cb0b/47.608013,-122.335167?exclude=currently,hourly,minutely', function (error, response, body) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.send(error || body);
    });
});

app.get('/json', function(req, res) {
    res.send({
        weather: 'sunny',
        temp: 51
    });
});

app.get('*', function(req, res) {
    res.sendFile( __dirname + "/public/index.html");
});

app.listen(app.get('port') || 8080, function() {
  console.log('Node app is running on port', app.get('port'));
});

