const db = require("../models");
const { uuid } = require('uuidv4')
module.exports = {
    
    findAll: function(req, res) {
     db.Event
        .find(req.query)
        .sort({date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Event
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Book
        .findOneAndUpdate({ uuid()})
    }
    
}