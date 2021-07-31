const models = require('../models');

module.exports = {
  get: (req, res) => {
    console.log('GET All Users!');
    
    models.users.get((err, result) => {
      if( err ) res.status(400).send('Not found!');
      else res.status(200).json(result);
    });
  }
};
