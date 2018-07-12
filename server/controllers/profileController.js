module.exports ={
    createProfile:(req, res) => {
        const { username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp} = req.body;
        const dbInstance = req.app.get('db')
        dbInstance.create_profile([username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp])
        .then(createUserProfile => {
            console.log(createUserProfile);
        res.status(200).json({createUserProfile:'Profile Created!'})
        }).catch(err =>  console.log('--------------------------->Profile Error', err));
    },
    
    getProfile :(req, res) => {
        
        const { username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp} = req.body;
        const dbInstance = req.app.get('db')
        dbInstance.get_profile(req.session.user.id)
        // req.session.user.id
        .then(getUserProfile => {
            console.log(getUserProfile);
        res.status(200).json({getUserProfile})
        }).catch(err =>  console.log('--------------------------->Profile Error', err));
    }

}


   