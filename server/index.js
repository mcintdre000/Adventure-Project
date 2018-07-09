require( 'dotenv' ).config();
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const session = require( 'express-session' );
const massive = require( 'massive' );

const app = express()

// Hostin path to build folder
app.use(express.static(path.join(__dirname, '../build')));

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

  massive( process.env.CONNECTION_STRING )
  .then( db => {
    app.set( 'db', db )
  })
  .catch( err => console.log( 'error', err ))

  //***********Data Endpoints *************/



  //*************USER login/logout Endpoints**************/


const port = 9001
app.listen( port, () => {
  console.log( `This server is over ${ port }!!!` )
})