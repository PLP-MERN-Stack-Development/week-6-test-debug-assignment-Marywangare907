const express = require('express');
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Update profile route
router.put(
  '/profile',
  auth,
  [
    body('username').optional().notEmpty().withMessage('Username cannot be empty'),
    body('email').optional().isEmail().withMessage('Valid email required'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userController.updateProfile
);

module.exports = router;
