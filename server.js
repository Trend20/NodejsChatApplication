const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const bodyParser = require('body-parser');

app.use(express.static(__dirname))
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// Routes

const messages = [
        { name: 'Tim', message: 'Hi' },
        { name: 'Jane', message: 'Hello' }
    ]
    // GET
app.get('/messages', (req, res) => {
    res.send(messages);
})

// POST
app.post('/messages', (req, res) => {
    messages.push(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);
});

io.on('connection', (socket) => {
    console.log('user connected');
});

const server = http.listen(3000, function() {
    console.log('Server is Listening on port', server.address().port);
});