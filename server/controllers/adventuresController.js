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
    },

    adventuresByLocation: ( req, res ) => {
       
        const { state } = req.body
        axios.get( `https://trailapi-trailapi.p.mashape.com/?limit=5&q[activities_activity_type_name_eq]=hiking&q[state_cont]=${ state }`, { headers: { 
                "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
                "Accept": "text/plain"
             }} 
            ).then( response => {
                // functionality to pull photos from api and store in DB
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
        // console.log('req.body', req.body)
        axios.get( `https://trailapi-trailapi.p.mashape.com/?lat=${ lat }&limit=5&lon=${ lon }`, { headers: { 
            "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
            "Accept": "text/plain"
         }}
         ).then( response => {
            //  console.log('Geo Location Response', response.data.places )
             let adventures = response.data
            res.status( 200 ).json( adventures )
         })
    },

    adventuresToDo: ( req, res ) => {
        console.log('req.body', req.body)
        let id;
        if( req.session.user ) {  
            id = req.session.user.id
        }else{
            id = 14
        }
        // const {id} = req.session.user
        const { adventures_completed, adventure_goals } = req.body;
        console.log('--------adventures_completed',adventures_completed )
        const dbInstance = req.app.get('db')
        dbInstance.update_todo([id, adventures_completed, adventure_goals]).then( updateToDo => {
            console.log('updateToDo', updateToDo)
            res.status( 200 ).json(updateToDo)
        })
    }
}

