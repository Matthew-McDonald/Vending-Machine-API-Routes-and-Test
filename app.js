const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development";
const config = require("./config.json")[env];
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(config.mongoUrl);

Item = require('./models/item')
Purchase = require('./models/purchase')

//Gets all the customers
app.get('/api/customer/items', function(req, res){
  Item.getItems(function(err, item){
    if(err){
      throw err;
    }
    res.json(item);
  });
});

//Gets all the purchases
app.get('/api/vendor/purchases', function(req, res){
  Purchase.getPurchase(function(err, Purchase){
    if(err){
      throw err;
    }
    res.json(Purchase);
  });
})

//Looking for port 27017
if (require.main === module) {
    app.listen(27017, function () {
        console.log("Server running at http://localhost:27017")
    })
}
module.exports = app;
