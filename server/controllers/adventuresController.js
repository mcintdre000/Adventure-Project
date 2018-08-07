const axios = require( 'axios' );
module.exports = {

    getAdventures: ( req, res ) => {
        axios.get( "https://trailapi-trailapi.p.mashape.com/?limit=20&q[activities_activity_type_name_eq]=hiking", { headers: { 
            "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
            "Accept": "text/plain"
         }}
        ).then( response => {
            let adventures = []
            for( let i = 0; i < response.data.places.length; i++ ){
                const dbInstance = req.app.get('db')
                let id = response.data.places[i].unique_id
                dbInstance.get_photo(id).then ( photo => {
                    response.data.places[i].picture = photo[0].photo
                    adventures.push(response.data.places[i])
                })
            }
            setTimeout(() => {
                res.status( 200 ).send( adventures )
            },800)



        }).catch( error => {
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
                let data = []
                for( let i = 0; i < response.data.places.length; i++ ){
                    const dbInstance = req.app.get('db')
                    let id = response.data.places[i].unique_id
                    dbInstance.get_photo(id).then ( photo => {
                        response.data.places[i].picture = photo[0].photo
                        data.push(response.data.places[i])
                    })
                }
                setTimeout(() => {
                    res.status( 200 ).send( data )
                },800)
        })
    },

    adventuresByGeoLocation: ( req, res ) => {
        const { lat, lon } = req.body
        axios.get( `https://trailapi-trailapi.p.mashape.com/?lat=${ lat }&limit=5&lon=${ lon }`, { headers: { 
            "X-Mashape-Key": "DGv4t2UiKTmshpNlSUfqtEXPySh5p1mMhsGjsnnRcN8U2y4YXb",
            "Accept": "text/plain"
         }}
         ).then( response => {
            let data = []
            for( let i = 0; i < response.data.places.length; i++ ){
                const dbInstance = req.app.get('db')
                let id = response.data.places[i].unique_id
                dbInstance.get_photo(id).then ( photo => {
                    response.data.places[i].picture = photo[0].photo
                    data.push(response.data.places[i])
                })
            }
            setTimeout(() => {
                console.log('--------data', data.length)
                res.status( 200 ).send( data )
            },1000)
         })
    },

    adventuresToDo: ( req, res ) => {
        let id;
        if( req.session.user ) {  
            id = req.session.user.id
        }else{
            id = 14
        }
        const { adventures_completed, adventure_goals } = req.body;
        const dbInstance = req.app.get('db')
        dbInstance.update_todo([id, adventures_completed, adventure_goals]).then( updateToDo => {
            res.status( 200 ).json(updateToDo)
        })
    }
}

