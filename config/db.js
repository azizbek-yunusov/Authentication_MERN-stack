const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDb connected to: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
