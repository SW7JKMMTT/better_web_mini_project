var express = require('express');
var router = express.Router();
var storage = require('node-persist');

function Item(key, title, stat) {
	this.key = key
	this.title = title;
	this.stat = stat;
}

storage.init({
		dir: "pewpew",
})
storage.setItem("items", [
		new Item(0, "Woo", false),
		new Item(1, "Woo2", true),
]);

/* GET home page. */
router.get('/', function(req, res, next) {
	storage.getItem("items").then(function(items) {
		res.render('todo', {items: items});
	});
});

router.post("/api/todo", function(req, res, next) {
	console.log(req.body);
	console.log("Adding " + req.body.title);
	storage.getItem("items").then(function(items) {
		var item = new Item(req.body.key, req.body.title, false)
		items.push(item);
		storage.setItem("items", items);
		res.json(item)
	});
});

router.get("/api/todo", function(req, res, next) {
	console.log("Getting")
	storage.getItem("items").then(function(items) {
		res.json(items)
	});
});

router.get("/api/todo/:t_id", function(req, res, next) {
	console.log("Getting")
	storage.getItem("items").then(function(items) {
		res.json(items[req.params.t_id])
	});
});

module.exports = router;
