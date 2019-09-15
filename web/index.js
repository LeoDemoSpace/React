// import express from 'express';
// import Router from '../server/router/index.js';

const express = require('express');
const router = require('../src/server/router/index.js');
const app = express();

app.use(router);

app.listen(3000, () => console.log('Example app listening on port 3000!'))