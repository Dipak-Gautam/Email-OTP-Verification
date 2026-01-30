import { Welcome_Email_Template } from "../Template/WelcomeEmailTemplate.js";
import { transporter } from "./Email.config.js";

export const sendWelcomeMessage = async (email, res, user, buttonLink) => {
  try {
    const response = await transporter.sendMail({
      from: '"Cosmic 👻" <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Welcome Message",
      html: Welcome_Email_Template.replace("{btnLink}", buttonLink)
        .replace(
          "{bodyBackgroundColor}",
          user.welcomeEmail.welcomeEmailColor.bodyBackground,
        )
        .replace("{bodyColor}", user.welcomeEmail.welcomeEmailColor.body)
        .replace("{buttonColor}", user.welcomeEmail.welcomeEmailColor.button)
        .replace(
          "{buttonBackgroundColor}",
          user.welcomeEmail.welcomeEmailColor.buttonBackground,
        )
        .replace("{titleColor}", user.welcomeEmail.welcomeEmailColor.title)
        .replace(
          "{titleBackgroundColor}",
          user.welcomeEmail.welcomeEmailColor.titleBackground,
        )
        .replace("{footerColor}", user.welcomeEmail.welcomeEmailColor.footer)
        .replace(
          "{footerBackgroundColor}",
          user.welcomeEmail.welcomeEmailColor.footerBackground,
        ),
    });
    res.status(200).json("Welcome message sent sucessfully");
  } catch (error) {
    console.log("email error", error);
    res.status(200).json("Welcome message cannot be sent");
  }
};
