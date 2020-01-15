const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const MongoAutentication = require('../autentication/mongo')

const app = express();

mongoose.connect(`mongodb+srv://${MongoAutentication.login}:${MongoAutentication.password}@cluster0-ycnmj.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Por padrão o express não entende o formato JSON
app.use(express.json()) // deve vir antes da rotas
app.use(routes)

// MongoDB (não-relacional)

app.listen(3333);

