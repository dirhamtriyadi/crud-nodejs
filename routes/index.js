const crudController = require('../controllers/crudController');
const express = require('express');
const router = express.Router();

router.get('/', crudController.index);
router.post('/', crudController.create);
router.get('/edit/:id', crudController.edit);
router.post('/update/:id', crudController.update);
router.get('/delete/:id', crudController.delete);

module.exports = router;