import mongoose from 'mongoose';

export const connector = async () => {
  mongoose.set('strictQuery', true); // ?
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err));
};

