const express = require('express');
const authRouter = require('./auth');
const router = express.Router();

const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/user', secured, (req, res, next) => {
  const { _raw, _json, ...userProfile } = req.user;

  res.render('user', { userProfile, title: 'Profile' });
});

router.use('/', authRouter);

module.exports = router;
