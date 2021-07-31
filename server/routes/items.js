const router = require('express').Router();
const controllers = require('../controllers/orders');

router.get('/', (req, res) => {
  console.log('GET Items!');
  res.end();
});

module.exports = router;
