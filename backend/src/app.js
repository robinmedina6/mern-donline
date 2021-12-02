const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes

app.use('/api/clients', require('./routes/clients'));
app.use('/api/desayunos', require('./routes/desayunos'));

module.exports = app;
