const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Language } = require('../models');
const { response } = require('express');

// // route that renders the homepage
// router.get('/', (req, res) => {
//   res.render('homepage', {
//   });
// });

// router.get('/', (req, res) => {
//     User.findAll(
//       {
//         where: {
//           language_id: 2
//         },
//         include: [
//           {
//             model: Post, 
//             attributes: ['id', 'post_url', 'title', 'created_at'],
//             include: {
//               model: Comment,
//               attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'], 
//             }
//           },
//           {
//             model: Comment,
//             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//             include: {
//               model: User,
//               attributes: ['username']
//             }
//           }
//         ]
//       })
//       .then(dbPostData => {
//         const posts = dbPostData.map(post => post.get({ plain: true }));
//         res.render('homepage', {
//           posts,
//           loggedIn: req.session.loggedIn
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       })
// });

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
            attributes: ['username', 'language_id']
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
      console.log("----------")
      console.log(req.session.language_id)
      console.log("----------")
      console.log(res.locals.session)
      console.log("----------")
      res.render('homepage', {
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

// route that renders meet people

router.get('/meet-people', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/meet-people');
    return;
  }
  res.render('meet-people');
});

// route that renders explore

router.get('/explore', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/explore');
    return;
  }
  res.render('explore');
});

// route that renders login

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

// route that renders the single post page
router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'post',
        'title',
        'created_at'
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
          attributes: ['username']
        }
      ]
    })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize the data
      const post = dbPostData.get({ plain: true });
      // pass data to template
      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;
