import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Logger from './tools/Logger';
import app from './routes/index';
import config from './tools/config';

dotenv.config();

const port = 4000 || process.env.PORT;
app.set('port', port);

const databaseUri = config[process.env.NODE_ENV];
mongoose.connect(databaseUri, { useNewUrlParser: true })
  .then(() => Logger('info', 'Connecting to database . . . . '))
  .then(() => Logger('info', 'Database connected successfully'))
  .catch(error => Logger('error', error));

app.listen(port, () => {
  Logger('info', `Contacts application started and running on port ${port}`);
});
