const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { HttpError, ctrlWrapper } = require('../../helpers');

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, 'Not found');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(403, 'Provided password is incorrect');
  }

  const payload = {
    id: user._id,
  };

  const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: '2m' });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: '23h',
  });

  await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });

  res.json({ accessToken, refreshToken });
};

module.exports = { login: ctrlWrapper(login) };
