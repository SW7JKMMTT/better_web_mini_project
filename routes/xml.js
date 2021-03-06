var express = require('express');
var router = express.Router();
var basex = require("basex");

var client = new basex.Session("localhost", 1984, "admin", "admin")

client.execute("OPEN psd7003");

/* GET home page. */
router.get('/courseinstructors', function(req, res, next) {
  client.execute(`XQUERY
            <table>
            <thead><td>Course</td><td>Title</td><td>Instructor</td></thead>
            {
              for $c in doc("uwm")/root/course_listing
                let $s := $c/section_listing
                order by $c/course
                return <tr><td>{data($c/course)}</td><td>{data($c/title)}</td><td>{$s[1]/instructor}</td></tr>
            }
            </table>
          `, function(err, reply) {
              res.render('xml', { test: reply.result } )
          });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  client.execute(`XQUERY
          <ul>
          {
              for $crs in doc("C:/Users/Thomas/Documents/git/7sem/WEB/better_web_mini_project/uwm.xml")//course
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
                for $c in doc("C:/Users/Thomas/Documents/git/7sem/WEB/better_web_mini_project/uwm.xml")//course_listing
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
