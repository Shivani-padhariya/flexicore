const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: (process.env.MAIL_HOST || "").replace(/^https?:\/\//, "").replace(/\/$/, ""),
  port: parseInt(process.env.MAIL_PORT || "465"),
  secure: process.env.MAIL_PORT == 465, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  debug: true, // Enable debug output
  logger: true // Log information in console
});

console.log("Mailer initialized for host:", process.env.MAIL_HOST);

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;
