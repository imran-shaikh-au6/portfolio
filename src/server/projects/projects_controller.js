var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Projects = require("./projects_schema");
mongoose.connect(
    "mongodb+srv://imran:12345@cluster0.rebng.mongodb.net/portfolio?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
);

router.get("/", (req, res) => {
    Projects.find({}, function (err, results) {
        if (err) return;
        res.json(results);
    });
});

module.exports = router;
