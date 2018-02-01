const express = require('express');
const http = require('http');
const path = require('path|');

const api = require('./serve/routes/api');

cons app = express();

app.use(express.static(path.join(__dirname, '/src')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/src'));
});

const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('corriendo'));
