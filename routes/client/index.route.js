const router = require('express').Router();
const homeRoutes = require('./home.route');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

const errorHandler = require('../../middlewares/error.middleware');
const authMiddleware = require('../../middlewares/auth.middleware');

router.use('/auth', authRoutes);
router.use(authMiddleware.verifyToken);
router.use('/', homeRoutes);
router.use('/api/v1/users', userRoutes);

router.get('*', (req, res) => {
  res.status(404).json({
    statusCode: 404,
    message: 'Tài nguyên không tồn tại.',
    data: {},
  });
});

router.use(errorHandler);

module.exports = router;
