import User from '../models/user.schema.js';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import { createAccessToken } from '../controllers/index.js';
import { createUserWithList } from './wishlist.service.js';

const userLoginDB = async (email, password) => {
  try {
    const user = await User.findOne({
      email: email,
    });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        return {
          _id: user._id,
          name: user.name,
          email: user.email,
          address: user.address,
          accesstoken: createAccessToken(user),
        };
        // return;
      }
    }
    return user;
  } catch (err) {
    console.log(err);
  }
};

const userSignupDB = async (
  email,
  password,
  name,
  address
) => {
  try {
    const newUser = new User({
      email: email,
      password: bcrypt.hashSync(password),
      name: name,
      address: address,
    });
    const user = await newUser.save();
    if (user) {
      await createUserWithList(user);
    }
    return {
      _id: user._id,
      name: user.name,
      address: user.address,
      email: user.email,
      accesstoken: createAccessToken(user),
    };
  } catch (error) {
    console.log(error);
  }
};

const userContactDB = async (email, name) => {
  try {
    const testAcc = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });
    const email = email;
    const name = name;
    const option = {
      from: 'temp2803032003@gmail.com',
      to: email,
      message: 'Thanks for contact us',
      html: '<b>Hello world?</b>',
      // send html from
    };
    transporter.sendMail(option, (err, info) => {
      return err ? err : 'Success';
    });
  } catch (error) {
    console.log(error);
  }
};

const userUpdateDB = async (_id, email, name) => {
  try {
    const user = await User.findById(_id);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      const updatedUser = await user.save();
      return {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        address: updatedUser.address,
        accesstoken: createAccessToken(updatedUser),
      };
    } else {
      return 'User not found';
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  userLoginDB,
  userSignupDB,
  userContactDB,
  userUpdateDB,
};
