const router = require('express').Router();
const authRoutes = require('./authRoutes');

const version = process.env.VERSION;
const apiPrefix = `/api/${version}/`;

router.use(apiPrefix + 'auth', authRoutes);

module.exports = router;
