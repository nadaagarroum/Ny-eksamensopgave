const path = require("path");
const express = require("express");
const {application} = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body.parser");
app.use(bodyParser.urlencoded({extended: true }));
const fetch = require("node-fetch");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
app.use(express.static(_dirname + '/images'));