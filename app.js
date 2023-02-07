
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const msgRoutes = require('./routes/message');
const loginRoutes= require('./routes/username')

app.use(bodyParser.urlencoded({extended: false}));

app.use(msgRoutes);
app.use('/username',loginRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(8000);
