const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const deliveries = require('./modules/deliveries-sample');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// sending delivery schedule to client
app.get('/schedule/:day', (req, res) => {
    console.log('getting schedule for day:', req.params.day);
    
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log('Listening on port', port);
})