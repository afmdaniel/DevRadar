const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const MongoAutentication = require('../autentication/mongo')

const app = express();

mongoose.connect(`mongodb+srv://${MongoAutentication.login}:${MongoAutentication.password}@cluster0-ycnmj.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors({ origin: 'http://localhost:3000' }))
// Por padrão o express não entende o formato JSON
app.use(express.json()) // deve vir antes da rotas
app.use(routes)

// MongoDB (não-relacional)

app.listen(3333);

