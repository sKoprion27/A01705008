const express = require('express');
const router = express.Router();

const menuControlller = require('../controllers/menu_controller')

router.get('/list',  menuControlller.getList);

router.get('/add', menuControlller.getAdd);

router.post('/add', menuControlller.postAdd);

module.exports = router;
