// implement your API here

// do not forget to add express in json file ... yarn or npm?
// do not forget to start server yarn start from the terminal

// require express and import the express package
// import database
// create the server
// tell express to interpret the type of string with middleware
// set server to listen on a port - why is {} uses/not used?

const express = require('express'); 
const db = require('./data/db.js'); 
const server = express(); 
server.use(express.json());
server.listen(3000, () => console.log('server is listening on port 3000'));


// write a route - starting with the simplest query - a GET request
// console.log the output of db.find to get the users and res.end so the request does not go on continuously
//        route          callback function and put request in a promise - note (200) = good

server.get('/api/users', (req, res) => {
    db.find()
        .then(users => res.status(200).json(users))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'The users information could not be retrieved'});
        });
});

server.post('/api/users', (req, res) => {
    console.log(req.body);
    const user = req.body;
    db.insert(user)
    .then(({ id }) => {
        db.findById(id)
        .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: 'Server error retrieving user'});
    });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Server error adding user'});
  });
});

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    db.findById(id)
        .then(user => {
            console.log('user', user);
            if (user) {
                res.status(200).json(user);
            } else {
            res.status(404).json({error: 'The user with the specified ID does not exist.'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({errror: 'The user information could not be retrieved.'});
        });

});


  









