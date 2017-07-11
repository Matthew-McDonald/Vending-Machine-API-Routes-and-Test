var mongoose = require('mongoose');

//Activities schema
var itemsSchema = mongoose.Schema({
      name: {
        type:String,
        required: true
      },
      cost:{
        type:Number,
        required: true
      },
      quantity: {
        type:Number,
        required: true
      }

});

var Item = module.exports = mongoose.model('Item', itemsSchema);

//Gets all customers
module.exports.getItems = function(callback, limit){
  Item.find(callback).limit(limit);
}
