require( 'dotenv' ).config();
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const session = require( 'express-session' );
const massive = require( 'massive' );
const path = require( 'path' );
const adventuresController = require( './controllers/adventuresController' );
const profileController = require('./controllers/profileController');
const lR = require('./controllers/bcryptAuthController')
const app = express()
const bcrypt = require('bcryptjs');

// Hostin path to build folder
app.use(express.static(path.join(__dirname, '../build')));

app.use( bodyParser.json() );

app.use(
    session({
      // store: new (require('connect-pg-simple')(session))(), -- related to connect-pg-simple
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
      }
    })
  )
  
  
  massive( process.env.CONNECTION_STRING )
  .then( db => {
    app.set( 'db', db )
  })
  .catch( err => console.log( 'error', err ))
  
  //***********Data Endpoints *************/
  app.get( '/api/data', adventuresController.getAdventures );
  app.post( '/api/dataByLocation', adventuresController.adventuresByLocation );
  
  //*************USER Endpoints**************/
  app.post('/api/user', profileController.createProfile );
  app.post('/api/register',lR.register)
  app.post('/api/login',lR.login)
  app.post('/api/logout',lR.logout)


const port = 9000
app.listen( port, () => {
  console.log( `This server is over ${ port }!!!` )
})