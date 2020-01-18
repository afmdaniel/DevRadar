const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(`mongodb+srv://${process.env.DEVRADAR_DB_LOGIN}:${process.env.DEVRADAR_DB_PASSWORD}@cluster0-ycnmj.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors({ origin: 'http://localhost:3000' }))
// Por padrão o express não entende o formato JSON
app.use(express.json()) // deve vir antes da rotas
app.use(routes)

// MongoDB (não-relacional)

server.listen(3333);

