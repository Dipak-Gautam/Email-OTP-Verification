import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    templateId: {
      type: String,
    },
    secretCode: {
      type: String,
    },
    emailConfig: {
      subject: {
        type: String,
        default: "OTP Verification",
      },
      title: {
        type: String,
        default: "Verify your Email",
      },
      firstParagraph: {
        type: String,
        default:
          "Hello\nThank you for signing up! Please confirm your email address by entering the code below:",
      },
      afterParagraph: {
        type: String,
        default:
          "If you did not create an account, no further action is required. If you have any questions, feel free to contact our support team.",
      },
      footer: {
        type: String,
        default: "© 2025 Dipak Gautam. All rights reserved.",
      },
      titleColor: {
        type: String,
        default: "ffffff",
      },
      titleBackgroundColor: {
        type: String,
        default: "33e371",
      },
      optColor: {
        type: String,
        default: "00a63e",
      },
      optBackgroundColor: {
        type: String,
        default: "e8f5e9",
      },
      otpBorderColor: {
        type: String,
        default: "00a63e",
      },
      bodyColor: {
        type: String,
        default: "1d1d1d",
      },
      bodyBackgroundColor: {
        type: String,
        default: "ffffff",
      },
      footerColor: {
        type: String,
        default: "6f7686",
      },
      footerBackgroundColor: {
        type: String,
        default: "f4f4f4",
      },
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    return next();
  } catch (error) {
    console.error("Error hashing password:", error);
    return next(error);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("user", userSchema);

export default User;
