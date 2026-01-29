import { Cart_Discount_Email_Template } from "../Template/CustomEmailTemplate.js";
import { transporter } from "./Email.config.js";
import formatText from "../Functions/formatText.js";

export const sendCartProduct = async (
  email,
  res,
  productTitle,
  imageLink,
  targetLink,
  user,
) => {
  try {
    const response = await transporter.sendMail({
      from: '"Pasal" <cosmicdevpokhara@gmail.com>',
      to: email,
      subject: "Welcome Message",
      html: Cart_Discount_Email_Template.replace("{productTitle}", productTitle)
        .replace("{imageLink}", imageLink)
        .replace("{targetLink}", targetLink)
        .replace("{body}", user.productEmail.productEmailColor.body)
        .replace(
          "{bodyBackground}",
          user.productEmail.productEmailColor.bodyBackground,
        )
        .replace("{titleColor}", user.productEmail.productEmailColor.title)
        .replace(
          "{titleBackgroundColor}",
          user.productEmail.productEmailColor.titleBackground,
        )
        .replace("{buttonColor}", user.productEmail.productEmailColor.button)
        .replace(
          "{buttonBackgroundColor}",
          user.productEmail.productEmailColor.buttonBackground,
        )
        .replace("{footerColor}", user.productEmail.productEmailColor.footer)
        .replace(
          "{footerBackgroundColor}",
          user.productEmail.productEmailColor.footerBackground,
        )
        .replace(
          "{productNameColor}",
          user.productEmail.productEmailColor.productName,
        )
        .replace("{sloganColor}", user.productEmail.productEmailColor.slogan)
        .replace(
          "{firstParagraphMessage}",
          formatText(user.productEmail.productEmailMessage.firstParagraph),
        )
        .replace(
          "{sloganMessage}",
          user.productEmail.productEmailMessage.slogan,
        )
        .replace(
          "{secondParagraphMessage}",
          formatText(user.productEmail.productEmailMessage.secondParagraph),
        )
        .replace(
          "{thirdParagraphMessage}",
          formatText(user.productEmail.productEmailMessage.thirdParagraph),
        )
        .replace(
          "{footerMessage}",
          user.productEmail.productEmailMessage.footer,
        )
        .replace(
          "{buttonMessage}",
          user.productEmail.productEmailMessage.button,
        ),
    });
    res.status(200).json("Cart Product sent sucessfully");
  } catch (error) {
    console.log("email error", error);
    res.status(500).json("Cart Product cannot be send cannot be sent");
  }
};
