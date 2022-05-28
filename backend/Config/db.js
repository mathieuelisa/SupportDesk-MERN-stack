import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Connection mongoDB on : ${connect.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Houston, We have a problem ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
