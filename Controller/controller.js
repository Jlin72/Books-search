const db = require('../models');

module.exports = {
  getAll: (req,res) => {
    db.Book.find({})
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  create: (req,res) => {
    db.Book.create(req.body)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  delete: (req,res) => {
    db.Book.findById({_id: req.params.id})
      .then(dbPost => dbPost.remove())
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  }
}