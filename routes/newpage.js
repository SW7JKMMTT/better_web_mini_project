var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('newpage', {title: 'Newpage!' });
});

module.exports = router;