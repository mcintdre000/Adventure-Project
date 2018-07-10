const axios = require( 'axios' );
const util = require('util');
module.exports = {

    getAdventures: (req, res) => {
       
        axios.get("https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=Phoenix&q[country_cont]=United+States&q[state_cont]=Arizona", { headers: { 
            "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
            "Accept": "text/plain"
         }}
        ).then(adventures => {
            console.log('test-----', adventures.data)
            res.status(200).send(adventures)
        }).catch(error => {
            // console.log('error')
            res.status(500).json({ error })
        });
    } 
}
