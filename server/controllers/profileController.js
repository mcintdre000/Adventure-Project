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
        // const {id} = req.session.user
        // const { username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp} = req.body;
        console.log('-----ID', req.session.user.id)
        // if(req.session.user){
        //     console.log('hit')
        //     res.json(req.session.user)
        // } else
        const dbInstance = req.app.get('db')
        dbInstance.get_profile(req.session.user.id)
        // req.session.user.id
        .then(getUserProfile => {
            // console.log('getUserProfile', JSON.parse(getUserProfile.adventures_completed));
        res.status(200).json({getUserProfile})
        }).catch(err =>  console.log('--------------------------->Profile Error', err));
    },
    updateProfile:(req, res) => {
        console.log('req', req.body)
        const {id} = req.session.user
        const {username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp} = req.body;
        console.log('--------adventures_completed',adventures_completed )
        const dbInstance = req.app.get('db')
        // console.log(adventure_goals, "adventure goals")
        dbInstance.update_profile([username, firstName, lastName, email, picture, bio, city, state, birthday, adventures_completed, adventure_goals, adventures, comments, stamp, id])
        .then(updateUserProfile => {
            console.log('update', updateUserProfile)
            // function parseArray (arrStr) {
            //     // arrStr = updateUserProfile[0].adventures_completed
            //     if (!arrStr) return null;
            //     if (arrStr[0] !== '{' || arrStr[arrStr.length-1] !== '}')
            //       throw "Not postgresql array! (" + arrStr + ")";
              
            //     var x = arrStr.substring(1, arrStr.length - 1);
            //     x = x.match(/(NULL|[^,]+|"((?:.|\n|\r)*?)(?!\\)"|\{((?:.|\n|\r)*?(?!\\)\})(,|$))/mg);
            //     if (x === null) throw "Not postgre array";
            //     return x.map(function (el) {
            //       if (el === 'NULL') return null;
            //       if (el[0] === '{') return arguments.callee(el);
            //       if (el[0] === '"')
            //          return el.substring(1, el.length - 1).replace('\\"', '"');
            //       return el;
            //     });
            //   }
            //   console.log('parsed update', parseArray(updateUserProfile[0].adventures_completed));
        res.status(200).json({updateUserProfile})
        }).catch(err =>  console.log('--------------------------->Profile Error', err));
    },

}


   