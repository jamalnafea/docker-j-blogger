const mongoose = require('mongoose');
const connectDB = async () => {
  
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    // const conn = await mongoose.connect('mongodb+srv://jimmy:XOcwu2sxUeWzN3Y0@cluster0.8hs6wmv.mongodb.net/blog')
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }

}

module.exports = connectDB;