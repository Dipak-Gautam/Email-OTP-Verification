import {
  Verification_Email_Template,
  Welcome_Email_Template,
} from "../Template/EmailTemplate.js";
import { transporter } from "./Email.config.js";

export const SendVerificationCode = async (
  email,
  verificationCode,
  res,
  user
) => {
  try {
    const firstParagraph = user.emailConfig.firstParagraph;
    const formattedFirstParagraph = firstParagraph.replace(/\n/g, "<br>");
    const response = await transporter.sendMail({
      from: '"OTP-Mailer " <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: user.emailConfig.subject,
      html: Verification_Email_Template.replace(
        "{verificationCode}",
        verificationCode
      )
        .replace("{title}", user.emailConfig.title)
        .replace("{firstParagraph}", formattedFirstParagraph)
        .replace("{afterParagraph}", user.emailConfig.afterParagraph)
        .replace("{footer}", user.emailConfig.footer)
        .replace("{bodyBackgroundColor}", user.emailConfig.bodyBackgroundColor)
        .replace("{bodyColor}", user.emailConfig.bodyColor)
        .replace("{titleColor}", user.emailConfig.titleColor)
        .replace(
          "{titleBackgroundColor}",
          user.emailConfig.titleBackgroundColor
        )
        .replace("{optColor}", user.emailConfig.optColor)
        .replace("{optBackgroundColor}", user.emailConfig.optBackgroundColor)
        .replace("{otpBorderColor}", user.emailConfig.otpBorderColor)
        .replace(
          "{footerBackgroundColor}",
          user.emailConfig.footerBackgroundColor
        )
        .replace("{footerColor}", user.emailConfig.footerColor),
    });
    res
      .status(200)
      .json({ message: "Otp sent sucessfully", otp: verificationCode });
  } catch (error) {
    console.log("email error", email);
    res.status(200).json("Email cannot be sent");
  }
};

export const sendWelcomeMessage = async (email, name, res) => {
  try {
    const response = await transporter.sendMail({
      from: '"Cosmic 👻" <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Welcome Message",
      html: Welcome_Email_Template.replace("{name}", name),
    });
    res.status(200).json("Welcome message sent sucessfully");
  } catch (error) {
    console.log("email error", error);
    res.status(200).json("Welcome message cannot be sent");
  }
};
