import { Cart_Discount_Email_Template } from "../Template/CustomEmailTemplate.js";
import { transporter } from "./Email.config.js";

export const sendCartProduct = async (
  email,
  res,
  productTitle,
  imageLink,
  targetLink,
  name
) => {
  try {
    const response = await transporter.sendMail({
      from: '"Pasal" <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Welcome Message",
      html: Cart_Discount_Email_Template.replace("{productTitle}", productTitle)
        .replace("{imageLink}", imageLink)
        .replace("{targetLink}", targetLink)
        .replace("{name}", name),
    });
    res.status(200).json("Cart Product sent sucessfully");
  } catch (error) {
    console.log("email error", error);
    res.status(200).json("CArt Product cannot be send cannot be sent");
  }
};
