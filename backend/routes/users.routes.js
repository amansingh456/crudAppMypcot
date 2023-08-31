const express = require('express');
const route = express.Router()

const controller = require("../controllers/users.controllers");
const { registerUser, loginUser, loggedInUser } = require('../controllers/auth.controllers');



// API
route.post('/users', controller.create);
route.get('/users', controller.find);
route.put('/users/:id', controller.update);
route.delete('/users/:id', controller.delete);
route.post("/register", registerUser)
route.post("/login", loginUser)
route.get("/loggedinuser", loggedInUser)


module.exports = route