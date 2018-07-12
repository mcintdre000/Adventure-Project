module.exports ={
    createProfile:(req, res) => {
        const { id, username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp} = req.body;
        const dbInstance = req.app.get('db')
        dbInstance.create_profile([username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp])
        .then(createUserProfile => {
            console.log('create', createUserProfile);
        res.status(200).json({createUserProfile:'Profile Created!'})
        }).catch(err =>  console.log('--------------------------->Profile Error', err));
    },
    
    getProfile :(req, res) => {
        
        const { username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp} = req.body;
        const dbInstance = req.app.get('db')
        dbInstance.get_profile(req.session.user.id)
        // req.session.user.id
        .then(getUserProfile => {
            console.log('get', getUserProfile);
        res.status(200).json({getUserProfile})
        }).catch(err =>  console.log('--------------------------->Profile Error', err));
    },
    updateProfile:(req, res) => {
        console.log('req', req.body)
        const {id} = req.session.user
        const {username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp} = req.body;
        const dbInstance = req.app.get('db')
        dbInstance.update_profile([username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp, id])
        .then(updateUserProfile => {
            console.log('update', updateUserProfile);
        res.status(200).json({updateUserProfile})
        }).catch(err =>  console.log('--------------------------->Profile Error', err));
    },

}


   