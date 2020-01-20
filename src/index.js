const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);

mongoose.connect('mongodb+srv://js:2Zrq0uBBDloayOla@cluster0-tew5s.mongodb.net/omnistack10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

app.listen(3333);