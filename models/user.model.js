const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bcryptjs = require('bcryptjs');

const { SALT_ROUNDS } = require('../constants/user.constant');

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
    required: false,
    default: '',
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  // //  bcrpytjs
  // const salt = await bcryptjs.genSalt(SALT_ROUNDS);
  // const hashPassword = await bcryptjs.hash(password, salt);

  // bcrypt
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema, 'users');
module.exports = User;
