require('./db/mongoose');
const app = require('express')();
const config = require('./db/config');
const newsRouter = require('./db/routes/news');
const bodyParser = require('body-parser');

app.use('/api', newsRouter);

app.use(bodyParser.json());


app.listen(config.PORT, () => console.log('Serwer słucha na: http://localhost:' + config.PORT));