var express = require('express');
var router = express.Router();
var basex = require("basex");

var client = new basex.Session("localhost", 1984, "admin", "admin")

client.execute("xquery 1 to 10", function(err, reply) {
	console.dir(reply);
});

client.execute("OPEN psd7003");


/* GET home page. */
router.get('/', function(req, res, next) {
  client.execute(`XQUERY
		  <ul>
		  {
			  for $crs in doc("/home/delusional/Documents/P7/better_web_mini_project/uwm.xml")//course
				  return <li>{data($crs)}</li>
		  }
		  </ul>
		  `, function(err, reply) {
			  res.send(reply.result)
		  });
});

router.get('/pew', function(req, res, next) {
  client.execute(`XQUERY
		<ul>
		{
			for $mpd in (
				for $c in doc("/home/delusional/Documents/P7/better_web_mini_project/uwm.xml")//course_listing
					for $i in distinct-values($c//instructor)
						return <course><name>{data($c/course)}</name><instructor>{data($i)}</instructor></course>
			)
			group by $d := $mpd//instructor
			order by count($mpd/instructor)
			return <li><ul><li>{$d}</li><li>{count($mpd/instructor)}</li></ul></li>
		}
		</ul>
		  `, function(err, reply) {
			  res.send(reply.result)
		  });
});

module.exports = router;
