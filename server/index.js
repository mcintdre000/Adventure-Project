require( 'dotenv' ).config();
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const session = require( 'express-session' );
const massive = require( 'massive' );
const path = require( 'path' );
const adventuresController = require( './controllers/adventuresController' );
const profileController = require('./controllers/profileController');
const lR = require('./controllers/bcryptAuthController');
const cl  = require('./controllers/cloudinaryController');
const app = express()
const bcrypt = require('bcryptjs');
const cloudinary = require('cloudinary');

// const ctrl = require('./controller');
const pgSession = require('connect-pg-simple')(session);

// Hostin path to build folder
app.use(express.static(path.join(__dirname, '../build')));

app.use( bodyParser.json() );

app.use(
    session({
      store: new pgSession({
                conString:process.env.CONNECTION_STRING
                }),
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
  app.get( '/api/getPhoto/:id', adventuresController.getPhoto );
  app.get('/api/comments/:id', adventuresController.getAdventureComments);
  app.post('/api/createComment', adventuresController.createAdventureComment);
  app.put('/api/editComment/:id', adventuresController.editAdventureComment);
  app.delete('/api/deleteComment/:id', adventuresController.deleteAdventureComment);

  
  //*************USER Endpoints**************/
 
app.post('/api/user', profileController.createProfile )
app.put('/api/user', profileController.updateProfile )
app.get('/api/user', profileController.getProfile )



//*************USER login/logout Endpoints**************/
app.post('/api/register',lR.register)
app.post('/api/login',lR.login)
app.post('/api/logout',lR.logout)


  /***************Cloudinary Endpoint ******************/
  app.get('/api/upload', cl.cloudinary);


const port = 9000
app.listen( port, () => {
  console.log( `This server is over ${ port }!!!` )
})