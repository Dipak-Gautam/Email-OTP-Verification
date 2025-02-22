import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
  secretCode: {
    type: String,
    required: true,
  },
  EmailAppPassword: {
    type: String,
    required: true,
  },
  senderEmail: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  html: {
    type: String,
  },
});

const Template = mongoose.model("Template", templateSchema);

export default Template;
