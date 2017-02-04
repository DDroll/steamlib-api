let express =  require('express'),
    glob =  require('glob'),
//import favicon from 'serve-favicon';
    logger  = require( 'morgan'),
    cookieParser  = require( 'cookie-parser'),
    path = require('path'),
    bodyParser  = require( 'body-parser'),
    passport = require('passport'),
    SteamStrategy = require('passport-steam').Strategy,
    compress  = require( 'compression'),
    methodOverride  = require( 'method-override');

module.exports = (app, config) => {
  let env = process.env.NODE_ENV || 'development';
  let authApi = require('../backend/routes/api/auth');
  let steamApi = require('../backend/routes/api/steam');
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';

  app.set('views', config.root + '/backend/views');
  app.set('view engine', 'jade');

  //api.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());
  app.use(passport.initialize());

  passport.use(new SteamStrategy({
      returnURL: 'http://localhost:3000/api/auth/success',
      realm: 'http://localhost:3000/',
      apiKey: '61E948627F583306C629C56FEC095C5F'
    },
    function(identifier, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {

        // To keep the example simple, the user's Steam profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Steam account with a user record in your database,
        // and return that user instead.
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  ));

  //base routes
  app.use('/api/auth', authApi);
  app.use('/api/steam', steamApi);

  app.all('/:url(api)/*', (req, res) => {
    res.status(404).render('404', {
      title: 'error'
    });
  });

  app.all('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/', 'index.html'));
  });

  if(app.get('env') === 'development'){
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.render('500', {
        message: err.message,
        error: err,
        title: 'error'
      });
    });
  }

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
      res.render('500', {
        message: err.message,
        error: {},
        title: 'error'
      });
  });

  return app;
};
