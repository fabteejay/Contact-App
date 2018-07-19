import http from 'http';
import Logger from './tools/Logger';
import app from './routes/index';

const port = 4000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  Logger('info', `Contacts application started and running on port ${port}`);
});
