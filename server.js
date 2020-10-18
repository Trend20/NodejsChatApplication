const express = require('express');
const app = express();

app.use(express.static(__dirname))

// Routes

const messages = [
        { name: 'Tim', message: 'Hi' },
        { name: 'Jane', message: 'Hello' }
    ]
    // GET
app.get('/messages', (req, res) => {
    res.send(messages);
})

app.listen(3000);