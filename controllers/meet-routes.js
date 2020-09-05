  const router = require('express').Router();
  const sequelize = require('../config/connection');
  const { User } = require('../models');
  const withAuth = require('../utils/auth');
  
  router.get('/', withAuth, (req, res) => {
    User.findAll({
      where: {
        // use the ID from the session
        username: req.session.username
      },
      attributes: [
        'id'
      ],
    })
    .then(dbUserData => {
      // serialize data before passing to template
      const users = dbUserData.map(username => username.get({ plain:true }));
      res.render('meet-people', { users, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
    
    module.exports = router;
