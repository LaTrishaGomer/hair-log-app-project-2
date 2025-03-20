const express = require('express');
const router = express.Router();

const User = require('../models/user.js');


router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render('hairlogs/index.ejs', {
      hairlogs: currentUser.hairlogs,
      recipes: currentUser.recipes,
      products: currentUser.products,
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


router.delete('/:hairlogId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.hairlogs.id(req.params.hairlogId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/hairlogs`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.get('/:hairlogId/edit', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const hairlog = currentUser.hairlogs.id(req.params.hairlogId);
    res.render('hairlogs/edit.ejs', {
      hairlog: hairlog,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.put('/:hairlogId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const hairlog = currentUser.hairlogs.id(req.params.hairlogId);
    hairlog.set(req.body);
    await currentUser.save();
    res.redirect(
      `/users/${currentUser._id}/hairlogs/${req.params.hairlogId}`
    );
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


// post MVP feature routes - can delete from below here if app breaks //


//Recipe page routes
router.get('/recipes/new', async (req, res) => {
  res.render('recipes/new.ejs');
});


router.post('/recipes', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.recipes.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/hairlogs`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.get('/recipes/:recipeId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const recipe = currentUser.recipes.id(req.params.recipeId);
    res.render('recipes/show.ejs', { recipe });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.get('/recipes/:recipeId/edit', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const recipe = currentUser.recipes.id(req.params.recipeId);
    res.render('recipes/edit.ejs', { recipe });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.put('/recipes/:recipeId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const recipe = currentUser.recipes.id(req.params.recipeId);
    recipe.set(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/hairlogs`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.delete('/recipes/:recipeId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.recipes.id(req.params.recipeId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/hairlogs`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Product page routes
router.get('/products/new', async (req, res) => {
  res.render('products/new.ejs');
});


router.post('/products', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.products.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/hairlogs`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.get('/products/:productId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const product = currentUser.products.id(req.params.productId);
    res.render('products/show.ejs', { product });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.get('/products/:productId/edit', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const product = currentUser.products.id(req.params.productId);
    res.render('products/edit.ejs', { product });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.put('/products/:productId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const product = currentUser.products.id(req.params.productId);
    product.set(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/hairlogs`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});


router.delete('/products/:productId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.products.id(req.params.productId).deleteOne();
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/hairlogs`);
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});



module.exports = router;
