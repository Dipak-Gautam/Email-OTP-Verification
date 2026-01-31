export const Welcome_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Community</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              color: #333;
          } 
          .container {
              max-width: 650px;
              margin: 30px auto;
              background: {bodyBackgroundColor};
              color:{bodyColor};
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: {titleBackgroundColor};
              color: {titleColor};
              padding: 18px;
              text-align: center;
              font-size: 20px;
              font-weight: bold;
          }
          .content {
              padding: 25px;
              line-height: 1.5;
          }
          
          .footer {
              background-color: {footerBackgroundColor};
              padding: 10px;
              text-align: center;
              color: {footerColor};
              font-size: 12px;
              border-top: 1px solid #ddd;
          }
          p {
              margin: 0 0 0px;
              font-size: 13px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">{headingMessage}</div>
          <div class="content">
              <p>{firstParagraphMessage}</p>
              
              <a href="{btnLink}" 
               style="
                    display: inline-block;
                    padding: 8px 25px;
                    margin: 16px 0;
                    background-color: {buttonBackgroundColor};
                    color: {buttonColor} !important;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 14px;
                    font-weight: bold;
                     ">{buttonTitleMessage}</a>
              <p>{lastParagraphMessage}</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} {footerMessage}</p>
          </div>
      </div>
  </body>
  </html>
`;
