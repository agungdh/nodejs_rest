var mysql = require('mysql')
var express = require('express')
 
var app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biodata"
});

con.connect(function(err) {
  if (err) throw err;
});

app.post('/', function(req, res) {
	con.query("SELECT * FROM biodata", function (err, result, fields) {
		if (err) throw err;
		res.json(result);
	});
})

app.post('/notes', function(req, res) {
  res.send(req.body.id + ' = ' + req.body.nama);
})

console.log('http://localhost:3000 bro !!!')
app.listen(3000)