var Base = require('mongoose').model('Base');

exports.getBases = function(req, res) {
  Base.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};

exports.getBaseById = function(req, res) {
  Base.findOne({_id:req.params.id}).exec(function(err, base) {
    res.send(base);
  })
};