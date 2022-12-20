import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import { generateToken, isAuth } from '../utils.js';

export const userLogin = async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    if (
      bcrypt.compareSync(req.body.password, user.password)
    ) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'User not found' });
};

export const userSignup = async (req, res, next) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      name: req.body.name,
      address: req.body.address,
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      name: user.name,
      address: user.address,
      email: user.email,
      token: generateToken(user),
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const userContact = async (req, res, next) => {
  const testAcc = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
  const email = req.body.email;
  const name = req.body.name;
  const option = {
    from: 'temp2803032003@gmail.com',
    to: email,
    message: 'Thanks for contact us',
    html: '<b>Hello world?</b>',
    // send html from
  };
  transporter.sendMail(option, (err, info) => {
    res.status(200).send(err ? err : 'Success');
  });
};

export const userUpdate = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      address: updatedUser.address,
      token: generateToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
};
