import nodemailer from "nodemailer";

const mailHandler = async (message, email) => {
  const config = {
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  };

  const transporter = nodemailer.createTransport(config);

  const mailMessage = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Following Up on Your Contact Form Submission",
    text: message,
    html: `<p>${message}</p>`,
  };

  const mailTronsporter = await transporter
    .sendMail(mailMessage)
    .then(() => {
      return {
        success: true,
        message: "Email has sent successfully",
      };
    })
    .catch((error) => {
      return {
        success: false,
        message: error.message,
      };
    });

  return mailTronsporter;
};

export default mailHandler;
