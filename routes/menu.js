const express = require('express');
const router = express.Router();

const menuControlller = require('../controllers/menu_controller')

router.get('/list',  menuControlller.getlist);

router.get('/add', menuControlller.getadd);

router.post('/add', menuControlller.postadd);

module.exports = router;
