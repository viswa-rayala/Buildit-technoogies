import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    college: {
      type: String,
      required: [true, "College name is required"],
    },
    graduationYear: {
      type: String,
      required: [true, "Graduation year is required"],
    },
    domain: {
      type: String,
      required: [true, "Domain is required"],
    },
    github: {
      type: String,
    },
    codingExperience: {
      type: String,
      required: [true, "Coding experience is required"],
    },
    motivation: {
      type: String,
      required: [true, "Motivation is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
