// pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var log = require("loglevel");
var path = require("path");
var exphbs = require('express-handlebars');

console.log('process.env.NODE_ENV (in server.js) = ' + process.env.NODE_ENV);
if (process.env.NODE_ENV) {
	console.log("Setting log level to ERROR");
	log.setLevel("ERROR");
} else { 
	var level = process.env.LOG_LEVEL || "DEBUG";
	console.log("Setting log level to " + level);
	log.setLevel(level);
}

// set up express
var port = process.env.PORT || 3000;
var app = express();

// require the models
var db = require(path.join(__dirname, '/models'));

// serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

// override with POST having ?_method= PUT
app.use(methodOverride('_method'));

// set up express to data parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// set handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// import route
require('./controllers/burger_controller.js')(app);

// sync our sequelize models
db.sequelize.sync().then(function() {
    app.listen(port, function() {
      console.log('Burger Enjoyment at Port:' + port);
    });
  });