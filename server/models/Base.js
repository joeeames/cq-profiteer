var mongoose = require('mongoose');

var baseSchema = mongoose.Schema({
  name: {type:String, required:'{PATH} is required!'},
  buildings: {type:Array}
});
var Base = mongoose.model('Base', baseSchema);

