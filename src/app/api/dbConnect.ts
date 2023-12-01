import mongoose from "mongoose";

export const dbConnect = async () => {
  const dburl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.8zwgnlb.mongodb.net/${process.env.MONGO_DB}`;

  try {
    await mongoose.connect(dburl);
    console.log("Connected to the database");
  } catch (error: any) {
    console.error("Error connecting to the database:", error.message);
  }
};
