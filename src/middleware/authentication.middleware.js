/**
 * basic
 * session
 * token
 */

import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  const authorization = req.headers['authorization'];
  const token =
    authorization && authorization.split(' ')[1];
  if (!token) {
    return res
      .status(401)
      .send({ message: 'No token bitch' });
  }
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, decode) => {
      if (err) {
        res.status(403).send({ message: 'Invalid token' });
      } else {
        req.user = decode;
        next();
      }
    }
  );
};
