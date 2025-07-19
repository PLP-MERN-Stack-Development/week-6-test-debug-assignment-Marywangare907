const express = require('express');
const { body, validationResult } = require('express-validator');
const bugController = require('../controllers/bugController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Validation middleware for bug creation
const validateBug = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('reporter').notEmpty().withMessage('Reporter is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

router.get('/', bugController.getBugs);
router.get('/:id', bugController.getBug);
router.post('/', authMiddleware, validateBug, bugController.createBug);
router.put('/:id', authMiddleware, validateBug, bugController.updateBug);
router.delete('/:id', authMiddleware, bugController.deleteBug);
router.use(authMiddleware);

module.exports = router;
