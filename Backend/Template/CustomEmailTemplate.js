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
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: #28a745;
              color: white;
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
          }
          .discount-text {
              color: #e63946;
              font-size: 18px;
              font-weight: bold;
              margin: 10px 0;
          }
          .button {
              display: inline-block;
              padding: 12px 25px;
              margin: 20px 0;
              background-color: #28a745;
              color: white;
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
              background-color: #f4f4f4;
              padding: 15px;
              text-align: center;
              color: #777;
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
              <p>Hello {name},</p>
              <p>You left something amazing in your cart — and now it’s available at a special discount just for you.</p>

              <img 
                  src="https://tse4.mm.bing.net/th/id/OIP.G_rJpK3mxsLmcGNls2CosgHaGk?rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Apple AirPods Max"
                  class="product-image"
              />

              <div class="product-title">Apple AirPods Max</div>
              <div class="discount-text">🎧 Enjoy 20% OFF for a limited time!</div>

              <p>Experience premium sound quality, active noise cancellation, and all-day comfort.</p>

              <a href="http://localhost:3000/" class="button">
                  Complete Your Purchase
              </a>

              <p>Hurry! This discount won’t last long. Grab yours before it’s gone.</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;
