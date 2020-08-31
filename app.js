var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');

const port = 3002;

var app = express();

// view engine setup

app.use(cors());
app.use(bodyParser.json());

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
