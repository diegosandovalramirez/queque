'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/jwtAuth"));

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log('server here! listening on', PORT));
