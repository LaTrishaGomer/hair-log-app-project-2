const mongoose = require('mongoose');


const hairlogSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  entryType: { 
    type: String, 
    enum: [
      'log', 
      'recipe', 
      'product'
    ], 
   },
  title: {
    type: [String],
  },
  hairCondition: {
    type: String, 
    enum: [
      'dry', 
      'moisturized', 
      'oily', 
      'balanced'],
  },
  scalpCondition: {
    type: String, 
    enum: [
      'dry', 
      'normal', 
      'oily', 
      'flaky'],
  },
  washDay: {
    type: String, 
    enum: [
      'yes', 
      'no'],
  },
  protectiveStyle: {
    type: [String],
  },
  productsUsed: {
    type: [String],
  },
  notes: {
    type: String, 
  },


  productName:{
    type: String,
  }, 
  category: {
    type: String,
    enum: [
      'Shampoo', 
      'Conditioner', 
      'Treatment', 
      'Oil', 
      'Leave-in', 
      'Styling Product'
    ],
  },
  claims: {
    type: String,
  },
  review: {
    type: String,
  },
  rebuy: {
    type: String,
    enum: [
      'yes', 
      'no'
    ],
  },

  recipeName: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  instructions: {
    type: String,
  },
  bestHairType: {
    type: String,
    enum: [
      'dry', 
      'oily', 
      'normal', 
      'all'
    ],
  },
  usageFrequency: {
    type: String,
    enum: [
      'weekly', 
      'biweekly', 
      'monthly'
    ],
  },
  results: {
    type: String,
  },
});





const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hairlogs: [hairlogSchema], 
});

const User = mongoose.model('User', userSchema);

module.exports = User;
