import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: String,
  body: String,
  lang: String,
});

export default mongoose.models.News || mongoose.model("News", NewsSchema);
