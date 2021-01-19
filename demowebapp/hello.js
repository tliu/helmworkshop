'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/\*', (req, res) => {
  var ip = require("ip");
  res.send('Hello World from ' + ip.address() + ' and your friends at ' + process.env.FRIENDS );
  console.log('handled request');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);