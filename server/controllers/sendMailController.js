require( "dotenv" ).config();
const nodemailer = require( 'nodemailer' );

module.exports={
    sendMail:( req, res ) =>{
        const { name, email, text } = req.body
        let transporter = nodemailer.createTransport({
                service: "gmail",
                auth:{
                    user: "adventureprojectco@gmail.com",
                    pass: process.env.NODE_MAILER_PASS,
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