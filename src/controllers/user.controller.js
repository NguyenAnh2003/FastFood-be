import {
  userContactDB,
  userLoginDB,
  userSignupDB,
  userUpdateDB,
} from '../services/user.service.js';

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const rs = await userLoginDB(email, password);
    res.send(rs);
  } catch (error) {
    console.log(error);
  }
};

const userSignup = async (req, res) => {
  const { email, password, name, address } = req.body;
  try {
    const rs = await userSignupDB(
      email,
      password,
      name,
      address
    );
    res.send(rs);
  } catch (error) {
    console.log(error.message);
  }
};

const userContact = async (req, res) => {
  const { email, name } = req.body;
  try {
    const rs = await userContactDB(email, name);
    res.send(rs);
  } catch (error) {
    console.log(error);
  }
};

const userUpdate = async (req, res) => {
  const { _id } = req.user;
  const { email, name } = req.body;
  try {
    const rs = await userUpdateDB(_id, email, name);
    res.send(rs);
  } catch (error) {
    console.log(error);
  }
};

export { userLogin, userSignup, userContact, userUpdate };
