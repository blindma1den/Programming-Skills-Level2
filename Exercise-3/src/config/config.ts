import dotenv from 'dotenv';
dotenv.config();
const Config = {
  mongoDB: {
    URI: process.env.MONGO_ATLAS,
    secret: process.env.JWT_SECRET,
    options: {
      serverSelectionTimeoutMS: 5000
    }
  },
  global: {
    port: process.env.PORT || 8080
  }
};

export default Config;
