const router = require('express').Router();

// auth routes
router.get('/', (request, response) => {
  response.json({ message: 'Auth route' });
});

module.exports = router;
