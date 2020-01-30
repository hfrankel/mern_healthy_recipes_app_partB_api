const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');
const checkJWT = require('./../middleware/check_jwt_middleware');



// router.post('/', UserController.create);

router.post('/', checkJWT, UserController.checkUser);

router.get('/', (req,res) => {
    res.json("Hit the backend")
})

// router.get('/new', UserController.make);

// router.get('/:id', UserController.show);

// router.post('/:id', UserController.favourite);

// router.delete('/:id', UserController.destroy);

module.exports = router;