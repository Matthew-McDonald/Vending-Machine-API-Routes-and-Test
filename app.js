
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development";
const config = require("./config.json")[env];

mongoose.connect(config.mongoUrl);







if (require.main === module) {
    app.listen(3000, function () {
        console.log("Server running at http://localhost:3000")
    })
}

module.exports = app;
