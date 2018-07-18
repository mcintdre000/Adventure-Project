const axios = require( 'axios' );

module.exports = {
    adventurePhoto: (req, res) => {
        const { id } = req.params
        const db = req.app.get('db');
        db.get_adventure_photo({
            id: id
        }).then( adventures => res.status(200).send(adventures) )
        .catch( () => res.status(500).send() )
    },

    adventureUploadPhoto: (req, res) => {
        const { id } = req.params;
        const { photo, name } = req.body;
        const db = req.app.get('db');
        db.upload_adventure_photo({
            adventurename: name,
            adventureid: id,
            photo: photo
        }).then( adventures => res.status(200).send(adventures) )
        .catch( () => res.status(500).send() )
    }
}