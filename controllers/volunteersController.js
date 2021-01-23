const { User } = require("../models");

module.exports = {
    findById: function(req,res) {
        User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req,res) {
        User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create:function(req,res) {
        const newUser = new User(req.body)
        console.log("new user:", newUser)
        User
            .create(req.body)

            .then(dbModel => {console.log(dbModel); res.json(dbModel)})
            .catch(err => {console.log(err); 
                res.status(422).json(err); 
                alert("The username or email you've chosen is already in use.")});
    },
    update: function(req,res) {
        User
            .findOneAndUpdate({_id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req,res) {
        User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};