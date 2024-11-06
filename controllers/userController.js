const User = require('@/models/User');
const bcrypt = require('bcrypt');
const { randomString } = require('@/helpers/generator');

const register = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      password: hashedPassword,
      email,
    });
    user.username = `${user.name}_${randomString(6)}`;
    user.apikey = randomString(42);
    user.profile = {
      balance: 0,
    };

    // Save the user to the database
    await user.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  register,
};
