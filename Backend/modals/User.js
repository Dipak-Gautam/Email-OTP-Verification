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
        default: "#ffffff",
      },
      titleBackgroundColor: {
        type: String,
        default: "#33e371",
      },
      optColor: {
        type: String,
        default: "#00a63e",
      },
      optBackgroundColor: {
        type: String,
        default: "#e8f5e9",
      },
      otpBorderColor: {
        type: String,
        default: "#00a63e",
      },
      bodyColor: {
        type: String,
        default: "#1d1d1d",
      },
      bodyBackgroundColor: {
        type: String,
        default: "#ffffff",
      },
      footerColor: {
        type: String,
        default: "#6f7686",
      },
      footerBackgroundColor: {
        type: String,
        default: "#f4f4f4",
      },
    },
    welcomeEmail: {
      subject: {
        type: String,
        default: "Welcome Email",
      },
      variables: {
        type: [String],
        default: () => ["name"],
      },
      welcomeEmailColor: {
        body: {
          type: String,
          default: "#313234",
        },
        bodyBackground: {
          type: String,
          default: "#ffffff",
        },
        button: {
          type: String,
          default: "#ffffff",
        },
        buttonBackground: {
          type: String,
          default: "#155dfc",
        },
        footer: {
          type: String,
          default: "#6f7686",
        },
        footerBackground: {
          type: String,
          default: "#f4f4f4",
        },
        title: {
          type: String,
          default: "#ffffff",
        },
        titleBackground: {
          type: String,
          default: "#155dfc",
        },
      },
      welcomeEmailMessage: {
        heading: {
          type: String,
          default: "Welcome to our community",
        },
        firstParagraph: {
          type: String,
          default:
            "Hello {name},\nWe’re thrilled to have you join us! Your registration was successful, and we’re committed to providing you with the best experience possible.\nHere’s how you can get started:",
        },
        buttonTitle: {
          type: String,
          default: "Get Started",
        },
        lastParagraph: {
          type: String,
          default:
            "If you need any help, don’t hesitate to contact us. We’re here to support you every step of the way.",
        },
        copyRight: {
          type: String,
          default: "OtpMailer. All rights reserved.",
        },
      },
    },
    productEmail: {
      subject: {
        type: String,
        default: "Special Offer",
      },
      variables: {
        type: [String],
        default: () => ["name"],
      },
      productEmailColor: {
        body: {
          type: String,
          default: "#313234",
        },
        bodyBackground: {
          type: String,
          default: "#ffffff",
        },
        button: {
          type: String,
          default: "#ffffff",
        },
        buttonBackground: {
          type: String,
          default: "#00a63e",
        },
        footer: {
          type: String,
          default: "#6f7686",
        },
        footerBackground: {
          type: String,
          default: "#f4f4f4",
        },
        productName: {
          type: String,
          default: "#1e2939",
        },
        slogan: {
          type: String,
          default: "#ff000d",
        },
        title: {
          type: String,
          default: "#ffffff",
        },
        titleBackground: {
          type: String,
          default: "#00a63e",
        },
      },
      productEmailMessage: {
        title: {
          type: String,
          default: "Your Cart Item Is Now 20% OFF! 🎉",
        },
        productName: {
          type: String,
          default: "Apple AirPods Max",
        },
        slogan: {
          type: String,
          default: "🎧 Enjoy 20% OFF for a limited time!",
        },
        firstParagraph: {
          type: String,
          default:
            "Hello {name},\nYou left something amazing in your cart and now it’s available at a special discount just for you.",
        },
        secondParagraph: {
          type: String,
          default:
            "Experience premium sound quality, active noise cancellation, and all-day comfort.",
        },
        thirdParagraph: {
          type: String,
          default:
            "Hurry! This discount won’t last long. Grab yours before it’s gone.",
        },
        button: {
          type: String,
          default: "Complete Your Purchase",
        },
        footer: {
          type: String,
          default: "Dipak Gautam. All rights reserved.",
        },
      },
    },
    // logOtp: {
    //   try: {
    //     type: Number,
    //   },
    //   otp: {
    //     type: String,
    //   },
    // },
  },
  { timestamps: true },
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
