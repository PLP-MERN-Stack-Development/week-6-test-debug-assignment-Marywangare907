const User = require('../models/User');

// Update user profile (username, email)
exports.updateProfile = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { username, email } = req.body;
    const update = {};
    if (username) update.username = username;
    if (email) update.email = email;
    const user = await User.findByIdAndUpdate(userId, update, { new: true, runValidators: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ id: user._id, username: user.username, email: user.email });
  } catch (err) {
    next(err);
  }
};
