const axios = require( 'axios' );
module.exports = {

    getAdventures: ( req, res ) => {
        axios.get( "https://trailapi-trailapi.p.mashape.com/?limit=20&q[activities_activity_type_name_eq]=hiking", { headers: { 
            "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
            "Accept": "text/plain"
         }}
        ).then( response => {
            let adventures = []
            console.log('-------Response length',response.data.places.length)
            for( let i = 0; i < response.data.places.length; i++ ){
                const dbInstance = req.app.get('db')
                let id = response.data.places[i].unique_id
                dbInstance.get_photo(id).then ( photo => {
                    // console.log('------photo', photo )
                    response.data.places[i].picture = photo[0].photo
                    adventures.push(response.data.places[i])
                    // res.status( 200 ).send(photo) 
                })
                // console.log( 'test-----', response.data.places[i] )
            }
            setTimeout(() => {
                // console.log('--------adventures', adventures)
                res.status( 200 ).send( adventures )
            },800)
            // let adventures = response.data.places



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
       
        const { state } = req.body
        axios.get( `https://trailapi-trailapi.p.mashape.com/?limit=5&q[activities_activity_type_name_eq]=hiking&q[state_cont]=${ state }`, { headers: { 
                "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
                "Accept": "text/plain"
             }} 
            ).then( response => {
                // response.data.places.map( places => {
                //     let name = places.name
                //     let unique_id = places.unique_id
                //     let photo = places.activities[0].thumbnail
                //     // console.log('test name', places.name, 'test id', places.unique_id, 'test thumbnail', places.activities[0].thumbnail)
                //     dbInstance.store_photo([unique_id, name, photo])
                // })


            // console.log('location adventures response', response.data)
            let adventures = response.data
            res.status( 200 ).json( adventures )

        })
    },

    adventuresByGeoLocation: ( req, res ) => {
        const { lat, lon } = req.body
        console.log('req.body', req.body)
        axios.get( `https://trailapi-trailapi.p.mashape.com/?lat=${ lat }&limit=5&lon=${ lon }`, { headers: { 
            "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
            "Accept": "text/plain"
         }}
         ).then( response => {
             console.log('Geo Location Response', response.data.places )
             let adventures = response.data
            res.status( 200 ).json( adventures )
         })
    },
    
    getAdventureComments: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db');
        db.get_adventure_comments({
            hiking_id: id
        })
        .then( comments => res.status(200).send(comments) )
        .catch( () => res.status(500).send() );
    },

    createAdventureComment: (req, res) => {
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
    
    editAdventureComment: (req, res) => {
        const { comment, usersID, unique_id } = req.body;
        const postid = req.params.id;
        const db = req.app.get('db');
        let hikingID = unique_id.toString()
        db.edit_adventure_comment({
            id: postid,
            content: comment,
            hikingID: hikingID
        })
        .then( (comments) => res.status(200).send(comments) )
        .catch( () => res.status(500).send() )
    },

    deleteAdventureComment: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db');
        db.delete_adventure_comment({
            id: id
        })
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() )
    },

    adventurePhoto: (req, res) => {
        // const { id } = req.params
        const id = 24368
        const db = req.app.get('db');
        db.get_adventure_photo({
            id: id
        }).then( adventures => res.status(200).send(adventures) )
        .catch( () => res.status(500).send() )
    } 
}

