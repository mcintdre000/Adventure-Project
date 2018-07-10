const axios = require( 'axios' );
const util = require('util');
module.exports = {

    getAdventures: (req, res) => {
       
        axios.get("https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=Phoenix&q[country_cont]=United+States&q[state_cont]=Arizona", { headers: { 
            "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
            "Accept": "text/plain"
         }}
        ).then(response => {
            let adventures = response.data
            console.log('test-----', response.data)
            res.status(200).send(adventures)
        }).catch(error => {
            // console.log('error')
            res.status(500).json({ error })
        });

        // axios.get('https://www.hikingproject.com/data/get-trails?lat=33.454&lon=-112.0739&maxDistance=10&key=200310000-cd001bfc17381827594177c22e99c983').then( response => {
        //     // console.log('test----', res.data)
        //     let adventures = response.data;
        //     res.status(200).send(adventures)
        // }).catch(error => {
        //         console.log('error', error)
        //         res.status(500).json({ error })
        //     });
    } 
}
