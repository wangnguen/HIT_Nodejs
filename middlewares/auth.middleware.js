const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.redirect(`/localhost:3000/auth/login`);
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, email } = decoded;

    const existAccount = await AccountAdmin.findOne({
      _id: id,
      email: email,
    });

    if (!existAccount) {
      res.clearCookie('token');
      res.redirect(`/localhost:3000/account/login`);
      return;
    }
    next();
  } catch (error) {
    res.clearCookie('token');
    res.redirect(`/localhost:3000/account/login`);
  }
};
module.exports = { verifyToken };
