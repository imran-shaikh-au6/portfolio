var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Skills = require("./skills_schema");
mongoose.connect(
    "mongodb+srv://imran:12345@cluster0.rebng.mongodb.net/portfolio?retryWrites=true&w=majority"
);

router.get("/", (req, res) => {
    Skills.find({}, function (err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;
