
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development";
const config = require("./config.json")[env];
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(config.mongoUrl);

Customer = require('./models/customer')


//Gets all the customers
app.get('/customers', function(req, res){
  Customer.getCustomers(function(err, customer){
    if(err){
      throw err;
    }
    res.json(customer);
  });
});




if (require.main === module) {
    app.listen(27017, function () {
        console.log("Server running at http://localhost:27017")
    })
}

module.exports = app;
