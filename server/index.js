require( 'dotenv' ).config();
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const session = require( 'express-session' );
const massive = require( 'massive' );
const path = require( 'path' );
const adventuresController = require( './controllers/adventuresController' );
const commentsController = require( './controllers/commentsController' );
const profileController = require( './controllers/profileController' );
const photoController = require( './controllers/photoController' );
const lR = require( './controllers/bcryptAuthController' );
const cl  = require( './controllers/cloudinaryController' );
const wc  = require( './controllers/weatherController' );
const sM = require('./controllers/sendMailController')
const app = express()


// const ctrl = require('./controller');
const pgSession = require( 'connect-pg-simple' )( session );

// Hostin path to build folder
app.use( express.static(path.join(__dirname, '../build')));

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
  
//***********Data/Filter Endpoints *************/
app.get( '/api/data', adventuresController.getAdventures );
app.post( '/api/dataByLocation', adventuresController.adventuresByLocation );
app.post( '/api/dataByGeoLocation', adventuresController.adventuresByGeoLocation );

/***Adventure Comments Endpoints***/
app.get( '/api/comments/:id', commentsController.getAdventureComments );
app.post( '/api/createComment', commentsController.createAdventureComment );
app.put( '/api/editComment/:id', commentsController.editAdventureComment );
app.delete( '/api/deleteComment/:id', commentsController.deleteAdventureComment );
  
/***Adventure Photo Endpoints***/
app.get( '/api/photo/:id', photoController.adventurePhoto );
app.post( '/api/uploadPhoto/:id', photoController.adventureUploadPhoto )
  
  //*************USER Endpoints**************/
 
app.post( '/api/user', profileController.createProfile )
app.put( '/api/user', profileController.updateProfile )
app.get( '/api/user', profileController.getProfile )
app.put( '/api/userToDo', adventuresController.adventuresToDo )


//*************USER login/logout Endpoints**************/
app.post( '/api/register',lR.register )
app.post( '/api/login',lR.login )
app.post( '/api/logout',lR.logout )

  /***************Cloudinary Endpoint ******************/
app.get( '/api/upload', cl.cloudinary );

/***Weather Endpoint***/
app.get( '/api/weather/:lat/:lon', wc.getWeather );

/*********Node Mailer Endpoint ***********************/
app.post('/api/sendmail', sM.sendMail);

const port = 9000
app.listen( port, () => {
  console.log( `This server is over ${ port }!!!` )
})