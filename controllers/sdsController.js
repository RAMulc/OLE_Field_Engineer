const db = require("../models");

// Defining methods for the sdsController
module.exports = {
  findAll: function (req, res) {
    db.SystemDesign
      .find(req.query)
      .sort({ allocReference: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  find: function (req, res) {
    const filterCriteria = JSON.parse(req.params.criteria);
    db.SystemDesign
      .find({
        ptaDgnNumber: { $regex: "(?i).*" + filterCriteria.ptaDgnNo + ".*" },
        allocReference: { $regex: "(?i).*" + filterCriteria.allocRef + ".*" },
        title: { $regex: "(?i).*" + filterCriteria.title + ".*" }
      })
      .sort({ allocReference: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.SystemDesign
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.SystemDesign
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.SystemDesign
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.SystemDesign
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
