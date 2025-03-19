const mongoose = require('mongoose');


const hairlogSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
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
  hydrationLevel: {
    type: String,
    enum: [
      'low', 
      'medium', 
      'high'],
  },
  breakageOrShedding: {
    type: String, 
    enum: [
      'none', 
      'minimal', 
      'moderate', 
      'excessive'],
  },
  lengthCheck: {
    type: [String],
  },
  proteinMoistureBalance: {
    type: String, 
    enum: [
      'protein overload', 
      'moisture overload', 
      'balanced'],
  },
  weather: {
    type: String,
    enum: [
      'humid', 
      'dry',
      'hot', 
      'cold'], 
  },
  notes: {
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
