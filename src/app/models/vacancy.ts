import mongoose from "mongoose";

const VacancySchema = new mongoose.Schema({
  title: String,
  body: String,
  lang: String,
});

export default mongoose.models.Vacancy ||
  mongoose.model("Vacancy", VacancySchema);
