import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import contacts from './contacts';

dotenv.config();

const app = express();

app
  .use(bodyParser.urlencoded({
    extended: false,
  }))
  .use(bodyParser.text({
    type: 'text/html',
  }))
  .use(bodyParser.json({
    type: 'application/*+json',
  }))
  .use(bodyParser.json())
  .use(bodyParser.raw())
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, user-token',
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

app.use('/contacts', contacts);

export default app;
