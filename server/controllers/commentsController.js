const axios = require( 'axios' );

module.exports = {
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
    }
}