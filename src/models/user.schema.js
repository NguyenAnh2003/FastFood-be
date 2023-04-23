import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    // https://www.mongodb.com/docs/manual/tutorial/model-referenced-one-to-many-relationships-between-documents/
    
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
