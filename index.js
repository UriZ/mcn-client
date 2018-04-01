let express = require('express');
let passport = require('passport');
let app = express();
let path = require('path');
let requestPromise = require('request-promise');
// todo need to move to local .env file
const SERVICE_API_URL = 'https://mcn-service-api.herokuapp.com/api/';
app.set('port', (process.env.PORT || 3001));

app.use(express.static(__dirname + '/public'));


if (process.env.ENV === 'production') {
    console.log("tunning in production ");
    app.use(express.static('client/build'));
}


app.get('/api', function(request, response) {
    // response.render('pages/index')
    console.log("got request");


    let data = {
        "data":"yes!!!"
    };
    console.log(data);
    response.send(data);

});





let getMatch = (request, response)=>{

        // get token from header
        let tokenHeader = request.headers['authorization'];

        // options for service api call
        let options = {
            method: 'get',
            uri: SERVICE_API_URL+'match',

            headers: {
                'authorization': tokenHeader
            },
            json: true // Automatically parses the JSON string in the response
        };


        requestPromise(options)
            .then(function (result) {
                console.log("success finding a match");

                response.status(200).send(result);
            })
            .catch(function (err) {

                console.log("error finding match " +  err);
                response.status(500).send(err);
            });
};

app.get('/match', getMatch);





app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});