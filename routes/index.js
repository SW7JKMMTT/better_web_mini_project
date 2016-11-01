var express = require('express');
var router = express.Router();

var links = [
{href:"http://www.google.dk", text: "Google"},
{href:"/", text: "Front page"},
{href:"/todo", text: "Todo"},
{href:"/xml", text: "XML"},
{href:"/xml/pew", text: "pew"},
{href:"/users", text: "users"} ];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: "Deez links!", links: links});
});

module.exports = router;
