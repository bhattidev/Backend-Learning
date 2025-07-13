import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, 'your_jwt_secret_key', {
    expiresIn: '7d'
  });
};

export default generateToken;
