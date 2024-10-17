// const User = require('../models/User');
// const twilio = require('twilio');

// const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// const forgotPassword = async (req, res) => {
//   const { phoneNumber } = req.body;
//   try {
//     const user = await User.findOne({ phone: phoneNumber });
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     const resetToken = Math.floor(100000 + Math.random() * 900000).toString();
//     user.resetToken = resetToken;
//     await user.save();

//     await client.messages.create({
//       body: `Your password reset code is ${resetToken}. Enter this code on the website to reset your password.`,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: phoneNumber
//     });

//     res.status(200).json({ message: 'Reset token sent successfully to your phone.' });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to send reset token', error: err.message });
//   }
// };

// module.exports = { forgotPassword };