const db = require('../models');
var uuid = require('react-native-uuid');

module.exports = {
  findAll: function(req, res) {
    db.Event.find(req.query)
      .sort({ date: 'asc' })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Event.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Event.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Event.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  addMessage: function(req, res) {
    req.body._id = uuid.v1();
    db.Event.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { messages: req.body } },
      { new: true },
    )
      .then((dbModel) => res.json(dbModel.messages))
      .catch((err) => res.status(422).json(err));
  },
  getAllMessages: function(req, res) {
    db.Event.findById(req.params.id)
      .then((dbModel) => res.json(dbModel.messages))
      .catch((err) => res.status(422).json(err));
  },
};
