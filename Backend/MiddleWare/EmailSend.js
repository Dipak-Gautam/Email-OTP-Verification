import formatText from "../Functions/formatText.js";
import { Contact_Email_Template } from "../Template/ContactEmailTemplate.js";
import {
  Default_Email_Template,
  Verification_Email_Template,
} from "../Template/EmailTemplate.js";
import { transporter } from "./Email.config.js";

export const SendVerificationCode = async (
  email,
  verificationCode,
  res,
  user,
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
        verificationCode,
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
          user.emailConfig.titleBackgroundColor,
        )
        .replace("{optColor}", user.emailConfig.optColor)
        .replace("{optBackgroundColor}", user.emailConfig.optBackgroundColor)
        .replace("{otpBorderColor}", user.emailConfig.otpBorderColor)
        .replace(
          "{footerBackgroundColor}",
          user.emailConfig.footerBackgroundColor,
        )
        .replace("{footerColor}", user.emailConfig.footerColor),
    });
    res
      .status(200)
      .json({ message: "Otp sent sucessfully", otp: verificationCode });
  } catch (error) {
    console.log("email error", email, error);
    res.status(200).json("Email cannot be sent");
  }
};

export const DefaultVerificationCode = async (email, verificationCode, res) => {
  try {
    const response = await transporter.sendMail({
      from: '"OTP-Mailer " <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Verify your email",
      html: Default_Email_Template.replace(
        "{verificationCode}",
        verificationCode,
      ),
    });
    res
      .status(200)
      .json({ message: "Otp sent sucessfully", otp: verificationCode });
  } catch (error) {
    console.log("email error", email);
    res.status(200).json("Email cannot be sent");
  }
};

export const SendContactMail = async (res, email, name, message) => {
  try {
    const response = await transporter.sendMail({
      from: '"OTP-Mailer " <cosmicdevpokhara@gmail.com>',
      to: "anjangautam095@gmail.com",
      subject: "New connect request from otp-mailer",
      html: Contact_Email_Template.replace("{userEmail}", email)
        .replace("{userName}", name)
        .replace("{userMessage}", formatText(message, [], [])),
    });
    res.status(200).json({ message: "contact mail sent sucessfully" });
  } catch (error) {
    console.log(" contact email error", error);
    res.status(500).json(" contact mail cannot be sent");
  }
};
