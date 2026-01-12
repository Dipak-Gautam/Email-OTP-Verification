import {
  Default_Email_Template,
  Verification_Email_Template,
  Welcome_Email_Template,
} from "../Template/EmailTemplate.js";
import { Cart_Discount_Email_Template } from "../Template/CustomEmailTemplate.js";
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
    console.log("email error", email, error);
    res.status(200).json("Email cannot be sent");
  }
};

export const sendWelcomeMessage = async (email, name, res, link) => {
  try {
    const response = await transporter.sendMail({
      from: '"Cosmic 👻" <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Welcome Message",
      html: Welcome_Email_Template.replace("{name}", name).replace(
        "{btnLink}",
        link
      ),
    });
    res.status(200).json("Welcome message sent sucessfully");
  } catch (error) {
    console.log("email error", error);
    res.status(200).json("Welcome message cannot be sent");
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
        verificationCode
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

export const sendCartProduct = async (email, res) => {
  try {
    const response = await transporter.sendMail({
      from: '"Pasal" <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Welcome Message",
      html: Cart_Discount_Email_Template,
    });
    res.status(200).json("Cart Product sent sucessfully");
  } catch (error) {
    console.log("email error", error);
    res.status(200).json("CArt Product cannot be send cannot be sent");
  }
};
