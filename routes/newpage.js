var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('newpage', {title: 'Newpage!' });
});

router.post("/", function(req, res) {
	res.render('postpage', {title: req.params.title})
});

module.exports = router;
