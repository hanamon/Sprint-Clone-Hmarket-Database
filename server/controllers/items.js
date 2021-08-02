const models = require('../models');

module.exports = {
  getAll: (req, res) => {
    models.items.getAll((err, result) => {
      if( err ) res.status(404).send('Not found!');
      else res.status(200).json(result);
    });
  }
};
