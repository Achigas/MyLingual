const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Language } = require('../models');


router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
        'post'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username', 'language_id'],
            include: {
              model: Language,
              attributes: ['language_name']
          }
        }
      ]
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('explore', {
        posts,
        loggedIn: req.session.loggedIn,
        languageid: req.session.language_id
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router;