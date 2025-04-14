const httpStatus = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Đã xảy ra lỗi không xác định.';
  res.status(statusCode).json({
    statusCode,
    message,
  });
};
module.exports = errorHandler;
