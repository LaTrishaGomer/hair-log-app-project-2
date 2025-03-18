const express = require('express');
const router = express.Router();

const User = require('../models/user.js');


router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render('hairlogs/index.ejs', {
      hairlogs: currentUser.hairlogs,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

router.get('/new', async (req, res) => {
    res.render('hairlogs/new.ejs');
  });
  

router.post('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.hairlogs.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/hairlogs`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.get('/:hairlogId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const hairlog = currentUser.hairlogs.id(req.params.hairlogId);
    res.render('hairlogs/show.ejs', {
      hairlog: hairlog,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});






module.exports = router;
