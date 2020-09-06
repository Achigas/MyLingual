  const router = require('express').Router();
  const sequelize = require('../config/connection');
  const { User, Language } = require('../models');

  
router.get('/', (req, res) => {
    User.findAll(
      {
        attributes: [
          'username',
          'language_id'
        ],
        include: 
          {
            model: Language, 
            attributes: ['id', 'language_name'],
        
          },
      })
      .then(dbUserData => {
        const users = dbUserData.map(user => user.get({ plain: true }));
        res.render('meet-people', {
          users,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

    module.exports = router;
