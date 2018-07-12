const axios = require( 'axios' );
module.exports = {

    getAdventures: ( req, res ) => {
        axios.get( "https://trailapi-trailapi.p.mashape.com/?limit=20&q[activities_activity_type_name_eq]=hiking", { headers: { 
            "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
            "Accept": "text/plain"
         }}
        ).then( response => {
            let adventures = response.data
            // console.log( 'test-----', response.data )
            res.status( 200 ).send( adventures )



        }).catch( error => {
            // console.log( 'error' )
            res.status( 500 ).json({ error })
        });

        // axios.get( 'https://www.hikingproject.com/data/get-trails?lat=33.454&lon=-112.0739&maxDistance=10&key=200310000-cd001bfc17381827594177c22e99c983' ).then( response => {
        //     // console.log('test----', res.data)
        //     let adventures = response.data;
        //     res.status( 200 ).send( adventures )
        // }).catch( error => {
        //         console.log( 'error', error )
        //         res.status(500).json({ error })
        //     });
    },

    adventuresByLocation: ( req, res ) => {
        const dbInstance = req.app.get('db')
        const { state } = req.body
        axios.get( `https://trailapi-trailapi.p.mashape.com/?limit=5&q[activities_activity_type_name_eq]=hiking&q[state_cont]=${ state }`, { headers: { 
                "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
                "Accept": "text/plain"
             }} 
            ).then( response => {
                response.data.places.map( places => {
                    let name = places.name
                    let unique_id = places.unique_id
                    let photo = places.activities[0].thumbnail
                    // console.log('test name', places.name, 'test id', places.unique_id, 'test thumbnail', places.activities[0].thumbnail)
                    dbInstance.store_photo([unique_id, name, photo])
                })
            // console.log('location adventures response', response.data)
            // let adventures = response.data
            // res.status( 200 ).json( adventures )



        })
    },

    getPhoto: ( req, res ) => {
        const dbInstance = req.app.get('db')
        const id = req.params.id
        dbInstance.get_photo(id).then ( photo => res.status( 200 ).send(photo) )
        .catch( error =>console.log( error ) )
    },
    getAdventureComments: (req, res) => {
        const { id } = req.params;
        console.log('id--', id)
        // console.log(req)
        const db = req.app.get('db');
        db.get_adventure_comments({
            hiking_id: id
        })
        .then( comments => res.status(200).send(comments) )
        .catch( () => res.status(500).send() );
    },

    createAdventureComment: (req, res) => {
        console.log('comment post--',req.body)
        const { comment, hikingID, hikingName, usersID } = req.body;
        const db = req.app.get('db');
        db.create_adventure_comment({
            content: comment,
            created: 'now()',
            hiking_id: hikingID,
            hiking_name: hikingName,
            users_id: usersID
        })
        .then( comments => res.status(200).send(comments) )
        .catch( () => res.status(500).send() );
    },
}
