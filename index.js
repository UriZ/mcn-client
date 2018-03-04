let express = require('express');
let passport = require('passport');
let app = express();
let path = require('path');

app.set('port', (process.env.PORT || 3001));

app.use(express.static(__dirname + '/public'));


if (process.env.ENV === 'production') {
    app.use(express.static('client/build'));
}


// app.get('/', function(request, response) {
//     // response.render('pages/index')
//
//     // response.sendFile(path.join(__dirname + '/views/pages/ReactTest.html'));
//     response.send("encouragement!!!");
//
// });

app.get('/api', function(request, response) {
    // response.render('pages/index')
    console.log("got request");


    let data = {
        "data":"yes!!!"
    };
    console.log(data);
    // response.sendFile(path.join(__dirname + '/views/pages/ReactTest.html'));
    response.send(data);

});

let FacebookTokenStrategy = require('passport-facebook-token');

passport.use(new FacebookTokenStrategy({
        clientID: "1151370004993163",
        clientSecret: "50bb09be87258f04b79883ddb4655512"
    }, function(accessToken, refreshToken, profile, done) {
        return done(error, profile.id);

    }
));


app.post('/auth/facebook/token',
    passport.authenticate('facebook-token'),
    function (req, res) {
        // do something with req.user
        res.send("ok!!");
    }
);


app.post('/test', function(request, response){
    response.send("ok");
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});