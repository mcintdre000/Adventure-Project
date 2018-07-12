const bcrypt= require('bcryptjs');
const saltRounds = 12;


module.exports ={
register: (req, res) => {
    const db = req.app.get('db');
    const { username, password, email } = req.body;
    bcrypt.hash(password, saltRounds).then(hashedPassword => {
      db.bcrypt_user([username, hashedPassword, email]).then(() => {
        req.session.user = { username };
        res.json(req.session.user)
       }).catch(error => {
        console.log('error', error);
        res.status(500).json({ message: 'User name already exists'})
      });
    });
  },
  
  login:(req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    db.find_user([username]).then(users => {
      if (users.length) {
        bcrypt.compare(password, users[0].password).then(doPasswordsMatch => {
          if (doPasswordsMatch) {
            req.session.user = { username: users[0].username, id:users[0].id};
              // res.redirect('/')
              console.log(req.session.user)
            res.json(req.session.user );
          
          } else {
            res.status(403).json({ message: 'Wrong password' });
          }
        });
      } else {
        res.status(403).json({ message: "That user is not registered" })
      }
    });
  },
  
  
logout:(req, res) => {
    req.session.destroy();
    res.status(200).send();
  }
  
  
}


