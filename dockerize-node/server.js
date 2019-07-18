'use strict';

const express = require('express');


// Constants
const PORT = process.env.APP_SERVER_PORT;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.json({foo: "bar"});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);