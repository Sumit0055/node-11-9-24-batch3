const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller')
//..........................http://localhost:3000/users...................................
router.get('/users', (req, res) => { // index->router->controller yah aise work karta hai........................
    usercontroller.getAllUsers(req, res);//getAllUser is ka function..........................................
})

//http://localhost:3000/user/7
router.get('/user/:id', (req, res) => { // index->router->controller yah aise work karta hai........................
    usercontroller.getUser(req, res);

})
module.exports = router;