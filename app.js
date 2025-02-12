  var express = require('express');
  var path = require('path');
  var favicon = require('serve-favicon');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var fs = require('fs');


  //var users = require('./routes/users');
  
  var app = express();
  
  //var user = require('./routes/users');

   

  // view engine setup
  //app.engine('html', engine);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  
  var index = require('./routes/index')(app);
  var user = require('./routes/users')(app);
  
  //app.use('/',index);
  //app.use('/users',user);



  // fs.readdirSync('./routes').forEach(function(curFile) {
      
  //     console.log('curFile',curFile);
  //     if (curFile.substr(-3) === '.js') {
  //         route = require('./routes/' + curFile);
  //         app.use('/routes', route);
  //     }
  // });


    


    // app.use('/', index);
    // app.use('/users', user);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

  module.exports = app;
