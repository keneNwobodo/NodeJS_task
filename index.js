// import express
const express = require('express')

// import mongodb
const MongoClient = require('mongodb').MongoClient

// import dotenv
const dotenv = require('dot-env')

// import body parser
const bodyParser = require('body-parser')

// set a port to listen to server
const port = process.env.mongo_host || 3000

// config dotenv
dotenv.config()

// initialize server
const app = express()

// use body parser
app.use(bodyParser.urlencoded({ extended: true }))

// connect to access the database
MongoClient.connect(db.url, function (err, client) {
    // throw error if any while accessing the db
    if (err) throw err;
    require('./routes.js')(app, client)
      app.listen(port, () => {
      console.log(`server is runnning on port ${port}`)
    });
  }); 