const express = require("express");
const app = express();
app.use(express.json());

module.exports = app;

module.exports = {
    url: 'mongodb://localhost:3000/tareas'
  };