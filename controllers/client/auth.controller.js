const jwt = require('jsonwebtoken');
const httpStatus = require('http-status-codes');
const bcrypt = require('bcrypt');

const catchAsync = require('../../utils/catchAsync');
const apiError = require('../../utils/ApiError');
const User = require('../../models/user.model');

const register = (req, res) => {
  res.render('client/pages/register.pug', {
    pageTitle: 'Trang đăng ký',
  });
};

const registerPost = catchAsync(async (req, res) => {
  const { email } = req.body;

  const isExist = await User.findOne({ email });

  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Người dùng đã tồn tại');
  }

  const user = await User.create(req.body);

  res.status(httpStatus.CREATED).json({
    statusCode: httpStatus.CREATED,
    message: 'Tạo người dùng thành công.',
    data: {
      user,
    },
  });
});

const login = (req, res) => {
  res.render('client/pages/login.pug', {
    pageTitle: 'Trang đăng nhập',
  });
};

const loginPost = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const existAccount = await User.findOne({ email }).select('+password');
  if (!existAccount) {
    throw new apiError(httpStatus.UNAUTHORIZED, 'Người dùng không tồn tại !');
  }

  const isPasswordValid = await bcrypt.compare(password, existAccount.password);

  if (!isPasswordValid) {
    throw new apiError(httpStatus.BAD_REQUEST, 'Mật khẩu không trùng khớp !');
  }

  // jwt
  const token = jwt.sign(
    {
      id: existAccount.id,
      email: existAccount.email,
    },
    process.env.AUTH_ACCESS_SECRET,
    {
      expiresIn: process.env.AUTH_ACCESS_TOKEN_EXPIRES_IN,
    },
  );

  res.cookie('token', token, {
    maxAge: parseInt(process.env.COOKIE_EXPIRES_IN_DAYS) * 24 * 60 * 60 * 1000,
    httpOnly: true,
    samesite: 'strict',
  });

  res.status(httpStatus.OK).json({
    httpStatus: httpStatus.OK,
    message: 'Đăng nhập thành cônng',
    data: {
      token,
    },
  });
});
module.exports = { login, loginPost, register, registerPost };
