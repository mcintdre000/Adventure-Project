require( "dotenv" ).config();
const nodemailer = require( 'nodemailer' );

module.exports={
    sendMail:( req, res ) =>{
        const { name, email, text } = req.body
        // const db = req.app.get('db');
        console.log('name, email, text', name, email, text)
        let transporter = nodemailer.createTransport({
                service: "gmail",
                auth:{
                    user: "adventureprojectco@gmail.com",
                    pass: process.env.NODE_MAILER_PASS,
                    // clientId: process.env.OAUTH_CLIENT_ID,
                    // clientSecret: process.env.OAUTH_CLIENT_SECRET,
                    // refreshToken: process.env.OAUTH_REFRESH_TOKEN,
                    // accessToken: process.env.OAUTH_ACCESSTOKEN,
                    // expires: 1484314697598
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            
        let message = {
            from: name + ' ' + 'adventureprojectco@gmail.com',
            to:'adventureprojectco@gmail.com',
            subject:'༜ Tips< Additions or User Requests ༜',
            text: name + ' ' + email + ' ' + text,
        }

        transporter.sendMail( message, ( err, info ) => {
            if( err ){
                console.log(err);
              
            }
            else{
               res.json({name: name, text: text, email: email})
                console.log( "Message Sent", info );
            }
            
        })
        
    }
}   