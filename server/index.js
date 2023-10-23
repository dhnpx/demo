const express = require('express');
const path = require('path');
const router = require('./router');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', router);

app.listen(port, () => { console.log(`Listening on port ${port}`) });
