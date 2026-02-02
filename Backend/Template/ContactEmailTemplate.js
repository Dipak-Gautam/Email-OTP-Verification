export const Contact_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #ffffff;
      color: #333333;
      margin: 0;
      padding: 20px;
    }
    
    
    .label {
      font-weight: bold;
      font-size:12px;
    }
    .message {
      margin-top: 12px;
    border: 1px solid #ddd;
    padding:15px;
    border-radius: 8px;
    }
        p{
        margin: 0px;
        padding:0px;
        }
  </style>
</head>
<body>

 

  <p><span class="label">Name:</span> {userName}</p>
  <p><span class="label">Email:</span> {userEmail}</p>
   <p><span class="label">Message:</span></p>

  <div class="message">
    <p>
      {userMessage}
    </p>
  </div>
  <p style="margin-top:20px; font-size:12px; color:#777;">
    This email was sent from the contact form.
  </p>

</body>
</html>
`;
