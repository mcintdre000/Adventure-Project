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
const bcrypt = require('bcrypt');

// Hostin path to build folder
// app.use(express.static(path.join(__dirname, '../build')));

app.use( bodyParser.json() );

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
      }
    })
  )
  app.post('/api/register',lR.register)
  app.post('/api/login',lR.login)
  app.post('/api/logout',lR.logout)
   

  massive( process.env.CONNECTION_STRING )
  .then( db => {
    app.set( 'db', db )
  })
  .catch( err => console.log( 'error', err ))

  //***********Data Endpoints *************/
app.get( '/api/data', adventuresController.getAdventures )
app.post('/api/user', profileController.createProfile )


  //*************USER login/logout Endpoints**************/


const port = 9000
app.listen( port, () => {
  console.log( `This server is over ${ port }!!!` )
})