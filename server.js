var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var subscribers = [
    {
        "id": "234kjw",
        "firstName": "Ramon",
        "email": "ramonlv93@somepage.com"
    },
    {
        "id": "as82w",
        "firstName": "DAny",
        "email": "dany123@somepage.com"
    },
    {
        "id": "234sk1",
        "firstName": "Bacon",
        "email": "some@somepage.com"
    },
    {
        "id": "ppo3j3",
        "firstName": "Frog Legs",
        "email": "@somepage.com"
    }
];


app.get('/subscribers', function(req, res) {
    console.log("GET From SERVER");
    res.send(subscribers);
});

app.post('/subscribers', function(req, res) {
    var subscriber = req.body;
    subscriber.id = Math.floor(Date.now()/1000) + subscriber.email;

    subscribers.push(subscriber);
    res.status(200).send("Successfully posted subscriber");
    console.log(subscribers);
});

app.listen(6069);
