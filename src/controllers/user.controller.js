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
    console.log({ email, name });
    const rs = await userContactDB(email, name);
    res.status(201).send(rs);
  } catch (error) {
    console.log(error);
  }
};

const userUpdate = async (req, res) => {
  const { email, name, address } = req.body;
  console.log({ email, name, address });
  try {
    // const rs = await userUpdateDB(_id, email, name);
    res.status(201).send({ message: 'Success update' });
  } catch (error) {
    console.log(error);
  }
};

export { userLogin, userSignup, userContact, userUpdate };
