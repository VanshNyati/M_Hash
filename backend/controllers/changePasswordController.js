// const User = require('../models/User');
// const bcrypt = require('bcryptjs');

// const changePassword = async (req, res) => {
//   const { phoneNumber, resetToken, newPassword } = req.body;
//   try {
//     const user = await User.findOne({ phone: phoneNumber, resetToken });
//     if (!user) return res.status(400).json({ message: 'Invalid reset token' });

//     user.password = newPassword;
//     user.resetToken = null;
//     await user.save();

//     res.status(200).json({ message: 'Password updated successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to update password', error: err.message });
//   }
// };

// module.exports = { changePassword };