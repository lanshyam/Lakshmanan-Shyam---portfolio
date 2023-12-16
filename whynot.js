const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { recruiterName, recruiterEmail, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({

  });

  const mailOptions = {
    from: recruiterEmail,
    to: "lan.shyam@gmail.com", 
    subject: "Recruiter Message from Portfolio",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: "Email sent successfully",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
