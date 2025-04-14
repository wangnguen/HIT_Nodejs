const jwt = require('jsonwebtoken');
const httpStatus = require('http-status-codes');

const catchAsync = require('../../utils/catchAsync');
const ApiError = require('../../utils/ApiError');
const User = require('../../models/user.model');
const bcrypt = require('bcrypt');
const login = (req, res) => {
  res.render('client/pages/login.pug', {
    pageTitle: 'Trang đăng nhập',
  });
};

const loginPost = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const ExistAccount = await User.findOne({ email }).select('+password');
  if (!ExistAccount) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Người dùng không tồn tại !');
  }

  const isPasswordValid = await bcrypt.compare(password, ExistAccount.password);

  if (!isPasswordValid) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Mật khẩu không trùng khớp !');
  }

  // jwt
  const token = jwt.sign(
    {
      id: ExistAccount.id,
      email: ExistAccount.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d', // token co thoi han  1 ngay
    },
  );

  res.cookie('token', token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    samesite: 'strict',
  });

  res.status(httpStatus.OK).json({
    httpStatus: httpStatus.OK,
    message: 'Đăng nhập thành cônng',
  });
});
module.exports = { login, loginPost };
