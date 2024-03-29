import jwt from 'jsonwebtoken';

export const createAccessToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d'
    }
  );
};
