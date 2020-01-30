const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');



// router.post('/', UserController.create);

router.post('/', UserController.checkUser);

router.get('/', (req,res) => {
    res.json("Hit the backend")
})

// router.get('/new', UserController.make);

// router.get('/:id', UserController.show);

// router.post('/:id', UserController.favourite);

// router.delete('/:id', UserController.destroy);

module.exports = router;