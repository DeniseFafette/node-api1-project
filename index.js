// implement your API here

// do not forget to add express in json file ... yarn or npm?
// do not forget to start server yarn start from the terminal

// require express and import the express package
// import database
// create the server
// set server to listen on a port

const express = require('express'); 
const db = require('./data/db.js'); 
const server = express(); 
server.listen(3000, () => console.log('server on 3000'));


// write a route - starting with the simplest query - a GET request
// console.log the output of db.find to get the users and res.end so the request does not go on continuously
//        route          callback function
server.get('/api/users', (req, res) => {
    console.log(db.find());
    res.end();
}) 

server.post('/api/users', (req, res) => {
    db.insert(req.body)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        console.log(err)
    })
  })
  
  server.listen(port, ( ) => {
      console.log('hello from server')
  })

// a port we will watch from traffic
//const port = 3000; 
//server.use(express.json())






