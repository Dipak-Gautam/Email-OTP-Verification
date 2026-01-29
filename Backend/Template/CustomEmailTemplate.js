export const Cart_Discount_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8"> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Don't Miss Your 20% Discount!</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              color: #333; 
          }
          .container {
              color:{body};
              max-width: 600px;
              margin: 30px auto;
              background: {bodyBackground};
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: {titleBackgroundColor};
              color: {titleColor};
              padding: 20px;
              text-align: center;
              font-size: 26px;
              font-weight: bold;
          }
          .content {
              padding: 25px;
              line-height: 1.8;
              text-align: center;
          }
          .product-image {
              width: 100%;
              max-width: 300px;
              margin: 20px auto;
              border-radius: 8px;
          }
          .product-title {
              font-size: 20px;
              font-weight: bold;
              margin: 15px 0 5px;
              color:{productNameColor}
          }
          .discount-text {
              color: {sloganColor};
              font-size: 18px;
              font-weight: bold;
              margin: 10px 0;
          }
          .button {
              display: inline-block;
              padding: 12px 25px;
              margin: 20px 0;
              background-color: #28a745;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
              font-weight: bold;
              transition: background-color 0.3s;
          }
          .button:hover {
              background-color: #1e7e34;
          }
          .footer {
              background-color: {footerBackgroundColor};
              padding: 15px;
              text-align: center;
              color: {footerColor};
              font-size: 12px;
              border-top: 1px solid #ddd;
          }
          p {
              margin: 0 0 15px;
          } 
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Your Cart Item Is Now 20% OFF! 🎉</div>
          <div class="content">
              <p>{firstParagraphMessage}</p>

              <img 
                  src="{imageLink}" 
                  alt="Apple AirPods Max"
                  class="product-image"
              />

              <div class="product-title">{productTitle}</div>
              <div class="discount-text">{sloganMessage}</div>

              <p>{secondParagraphMessage}</p>

              <a href="{targetLink}" 
              style="
                    display: inline-block;
                    padding: 12px 25px;
                    margin: 20px 0;
                    background-color: {buttonBackgroundColor};
                    color: {buttonColor} !important;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: bold;
                     ">
                  {buttonMessage}
              </a>

              <p>{thirdParagraphMessage}</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} {footerMessage}</p>
          </div>
      </div>
  </body>
  </html>
`;
