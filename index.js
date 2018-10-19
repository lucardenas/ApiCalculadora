const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 1500;
const api = require('./routers/app');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/apiCalculadora', api);

app.get('/', (req, res) => {
    res.send('API-CALCULADORA');
});

app.listen(PORT, () => {
    console.log('API Server runing on localhost:' + PORT);
});