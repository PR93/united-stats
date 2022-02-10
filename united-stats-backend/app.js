require('./db/mongoose');
const bodyParser = require('body-parser');
const app = require('express')();
const config = require('./db/config');
const newsRouter = require('./db/routes/news');


app.use(bodyParser.json());

app.use('/api/', newsRouter);




app.listen(config.PORT, () => console.log('Serwer słucha na: http://localhost:' + config.PORT));