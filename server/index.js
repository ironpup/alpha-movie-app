const express = require('express');

const port = 3000;
const app = express();

const db = require('./models/index.js');

require('./middleware.js')(app, express);

app.listen(port, () => { 
    console.log('listening on port ', port);
});
