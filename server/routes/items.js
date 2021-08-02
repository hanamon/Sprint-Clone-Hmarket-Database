const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.items.getAll);

module.exports = router;
