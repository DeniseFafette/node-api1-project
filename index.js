// implement your API here

// do not forget to add express in json file ... yarn or npm?
// do not forget to start server yarn start from the terminal

// require express and import the express package
// import database
// create the server
// set server to listen on a port - why is {} uses/not used?

const express = require('express'); 
const db = require('./data/db.js'); 
const server = express(); 
server.listen(3000, () => console.log('server is listening on port 3000'));


// write a route - starting with the simplest query - a GET request
// console.log the output of db.find to get the users and res.end so the request does not go on continuously
//        route          callback function and put request in a promise - note (200) = good

server.get('/api/users', (req, res) => {
    db.find()
        .then(users => res.status(200).json(users));
});

server.get('/api/users/:id', (req, res) => {
    const id = req.params.id;
    db.findById(id)
        .then(user => res.status(200).json(user));
    //console.log(req.params);
});

server.post('/api/users', (req, res) => {
    db.insert(req.body)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        console.log(err)
    })
  })
  


//server.use(express.json())






