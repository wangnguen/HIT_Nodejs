const httpStatus = require('http-status-codes');

const User = require('../../models/user.model');
const catchAsync = require('../../utils/catchAsync');
const ApiError = require('../../utils/ApiError');

const getUsers = catchAsync(async (req, res) => {
  const users = await User.find({});
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    message: 'Lấy danh sách người dùng thành công !',
    data: {
      users,
    },
  });
});

const createUser = catchAsync(async (req, res) => {
  const { fullName, email, password } = req.body;

  const isExistEmail = await User.findOne({ email: email });
  if (isExistEmail) {
    throw new ApiError(httpStatus.CONFLICT, 'Người dùng đã tồn tại !');
  }

  const user = await User.create({
    fullName: fullName,
    email: email,
    password: password, // da ma hoa ben model
  });

  res.status(httpStatus.CREATED).json({
    statusCode: httpStatus.CREATED,
    message: 'Tạo người dùng thành công !',
    data: {
      user,
    },
  });
});

const updateUser = catchAsync(async (req, res) => {
  // const user = await User.findById(req.params.id);
  // Object.assign(user, req.body);
  // await user.save();

  const isExist = await User.findById(req.params.id);
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Người dùng không tồn tại');
  }

  const { email } = req.body;

  if (email) {
    // tìm id khác với id.param
    const isExistEmail = await User.findOne({ email, _id: { $ne: req.params.id } });
    if (isExistEmail) {
      throw new ApiError(httpStatus.CONFLICT, 'Email đã tồn tại');
    }
  }

  const userUpdate = req.body;
  const user = await User.findByIdAndUpdate(req.params.id, userUpdate);

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    message: 'Cập nhật người dùng thành công.',
    data: {
      user,
    },
  });
});

const getUserById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Người dùng không tồn tại !');
  }

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    message: 'Lấy danh người dùng thành công !',
    data: {
      user,
    },
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const user = await User.deleteOne({ _id: id });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Người dùng không tồn tại !');
  }

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    message: 'Xoá người dùng thành công',
    data: {
      user,
    },
  });
});

const searchUserByName = catchAsync(async (req, res) => {
  const fullName = req.query.name;
  console.log(req.query.name);
  const user = await User.find({
    fullName: { $regex: fullName, $options: 'i' },
  });

  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Người dùng không tồn tại !');
  }

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    message: 'Tìm kiếm thành công',
    data: { user },
  });
});

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  searchUserByName,
  getUserById,
};
