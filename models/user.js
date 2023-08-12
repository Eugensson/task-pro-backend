const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');
const emailRegexp =
  /^(?=.*[@.])[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*$/;
// const passRegex =
//   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      // match: passRegex,
      required: [true, 'Set password for user'],
    },
    avatarURL: { type: String, default: '' },
    theme: {
      type: String,
      enum: ['LIGHT', 'DARK', 'VIOLET'],
      default: 'LIGHT',
    },
    boards: { type: Array, default: [] },
    accessToken: {
      type: String,
      default: '',
    },
    refreshToken: {
      type: String,
      default: '',
    },
  },
  { versionKey: false, timestamps: false }
);

userSchema.post('save', handleMongooseError);

const User = model('user', userSchema);

module.exports = { User };