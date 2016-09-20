var express = require('express');
var router = express.Router();
var storage = require('node-persist');

function Item(title, stat) {
	this.title = title;
	this.stat = stat;
}

storage.init({
		dir: "pewpew",
})
storage.setItem("items", [
		new Item("Woo", false),
		new Item("Woo2", true),
]);

/* GET home page. */
router.get('/', function(req, res, next) {
	storage.getItem("items").then(function(items) {
		res.render('todo', {items: items});
	});
});

router.post("/api", function(req, res, next) {
	console.log(req.body);
	console.log("Adding " + req.body.title);
	storage.getItem("items").then(function(items) {
		items.push(new Item(req.body.title, false));
		storage.setItem("items", items);
		res.json(items)
	});
});

router.get("/api", function(req, res, next) {
	console.log("Getting")
	storage.getItem("items").then(function(items) {
		res.json(items)
	});
});

module.exports = router;
