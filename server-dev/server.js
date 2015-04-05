module.exports = () => {
    var express = require('express');

    var app = express();
    var server = require('http').Server(app);

    app.use(express.static('./build'));

    app.use('*', (req, res) => {
        res.sendFile('./build/index.html');
    });

    require('./connectdb.js')();

    server.listen(8001, () => console.log('Listening on port %d', server.address().port));
};