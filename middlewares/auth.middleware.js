const jwt = require('jsonwebtoken');
const httpStatus = require('http-status-codes');
const User = require('../models/user.model');
const ApiError = require('../utils/ApiError');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Vui lòng đăng nhập!');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, email } = decoded;

    const user = await User.findOne({ _id: id, email });
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Người dùng không tồn tại');
    }

    next();
  } catch (error) {
    res.clearCookie('token');
    res.status(httpStatus.UNAUTHORIZED).json({
      httpStatus: httpStatus.UNAUTHORIZED,
      message: 'Token không hợp lệ hoặc đã hết hạn',
    });
  }
};

module.exports = { verifyToken };
