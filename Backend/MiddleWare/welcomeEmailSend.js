import { Welcome_Email_Template } from "../Template/WelcomeEmailTemplate";
import { transporter } from "./Email.config";

export const sendWelcomeMessage = async (email, name, res, link) => {
  try {
    const response = await transporter.sendMail({
      from: '"Cosmic 👻" <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Welcome Message",
      html: Welcome_Email_Template.replace("{name}", name).replace(
        "{btnLink}",
        link,
      ),
    });
    res.status(200).json("Welcome message sent sucessfully");
  } catch (error) {
    console.log("email error", error);
    res.status(200).json("Welcome message cannot be sent");
  }
};
