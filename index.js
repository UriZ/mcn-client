let express = require('express');
let passport = require('passport');
let app = express();
let path = require('path');
let requestPromise = require('request-promise');
let bodyParser = require('body-parser')

// todo need to move to local .env file
const SERVICE_API_URL = 'https://mcn-service-api.herokuapp.com/api/';
app.set('port', (process.env.PORT || 3001));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

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
                console.log("success finding a match!");
                response.status(200).send(result);
            })
            .catch(function (err) {
                if (err.statusCode){
                    console.log("error while finding a match: " + err);
                    response.status(err.statusCode).send(err);
                }
                else{
                    console.log("unknown error - returning 500: " + err);
                    response.status(500).send(err);

                }
            });
};

app.get('/match', getMatch);



let getUser = (request, response)=>{

    // get token from header
    let tokenHeader = request.headers['authorization'];

    // options for service api call
    let options = {
        method: 'get',
        uri: SERVICE_API_URL+'users',
        headers: {
            'authorization': tokenHeader
        },
        json: true // Automatically parses the JSON string in the response
    };


    requestPromise(options)
        .then(function (result) {
            console.log("success getting a user");
            response.status(200).send(result);
        })
        .catch(function (err) {

            if (err.statusCode){
                console.log("error getting user from db  : " + JSON.stringify(err.error));
                // we use err.error since request promise transforms the err object
                response.status(err.statusCode).send(err.error);
            }
            else{
                console.log("unknown error - returning 500: " + JSON.stringify(err.error));
                response.status(500).send(err.error);

            }
        });
};


app.get('/users',getUser);

let createUser = (request, response)=>{

    // get token from header
    let tokenHeader = request.headers['authorization'];

    // options for service api call
    let options = {
        method: 'post',
        uri: SERVICE_API_URL+'users',
        headers: {
            'authorization': tokenHeader
        },
        json: true // Automatically parses the JSON string in the response
    };


    requestPromise(options)
        .then(function (result) {
            console.log("success creating a user");
            response.status(200).send(result);
        })
        .catch(function (err) {

            if (err.statusCode){
                console.log("error crating a user : " + JSON.stringify(err.error));
                // we use err.error since request promise transforms the err object
                response.status(err.statusCode).send(err.error);
            }
            else{
                console.log("unknown error - returning 500: " + JSON.stringify(err.error));
                response.status(500).send(err.error);

            }
        });
};


app.post('/users', createUser);


let getUserPref = (request, response)=>{

    // get token from header
    let tokenHeader = request.headers['authorization'];

    // options for service api call
    let options = {
        method: 'GET',
        uri: SERVICE_API_URL+'users/preferences',
        headers: {
            'authorization': tokenHeader
        },
        json: true // Automatically parses the JSON string in the response
    };


    requestPromise(options)
        .then(function (result) {
            console.log("success getting user preferences");
            response.status(200).send(result);
        })
        .catch(function (err) {

            if (err.statusCode){
                console.log("error getting user pref : " + JSON.stringify(err.error));
                // we use err.error since request promise transforms the err object
                response.status(err.statusCode).send(err.error);
            }
            else{
                console.log("unknown error - returning 500: " + JSON.stringify(err.error));
                response.status(500).send(err.error);

            }
        });
};
app.get('/users/preferences', getUserPref);





let updateUserPref = (request, response)=>{

    // get token from header
    let tokenHeader = request.headers['authorization'];

    // options for service api call
    let options = {
        method: 'put',
        uri: SERVICE_API_URL+'users/preferences',
        headers: {
            'authorization': tokenHeader
        },
        body: request.body
        ,
        json: true // Automatically parses the JSON string in the response
    };

    requestPromise(options)
        .then(function (result) {
            console.log("success updating user preferences");
            response.status(200).send(result);
        })
        .catch(function (err) {

            if (err.statusCode){
                console.log("error setting user pref : " + JSON.stringify(err.error));
                // we use err.error since request promise transforms the err object
                response.status(err.statusCode).send(err.error);
            }
            else{
                console.log("unknown error - returning 500: " + JSON.stringify(err.error));
                response.status(500).send(err.error);

            }
        });
};

app.put('/users/preferences', updateUserPref);


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});