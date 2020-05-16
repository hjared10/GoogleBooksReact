const db = require("../models");

// Defining methods for the booksController
module.exports = {
  saveBooks: function(req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findSaved: function(req, res) {
    db.Book.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};