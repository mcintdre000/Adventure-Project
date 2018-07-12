const cloudinary = require('cloudinary');

module.exports= {
    cloudinary : (req, res) => {

        const timestamp = Math.round((new Date()).getTime() / 1000);
        
        const api_secret  = process.env.CLOUDINARY_SECRET_API;
    
        const signature = cloudinary.utils.api_sign_request({ timestamp: timestamp }, api_secret);
    
        const payload = {
            signature: signature,
            timestamp: timestamp
        };
            res.json(payload);
    
    }
}