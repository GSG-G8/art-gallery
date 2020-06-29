const nodemailer = require('nodemailer');

const sendMail = async (userId) => {
  const EMAIL_USERNAME = process.env.SENDER_EMAIL_ADDRESS;
  const nodemailerSettings = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: EMAIL_USERNAME,
      clientId: process.env.MAILING_SERVICE_CLIENT_ID,
      clientSecret: process.env.MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: process.env.MAILING_SERVICE_REFRESH_TOKEN,
      accessToken: process.env.MAILING_SERVICE_ACCESS_TOKEN,
      expires: process.env.MAILING_SERVICE_EXPIRY,
    },
  };

  const transporter = nodemailer.createTransport(nodemailerSettings);

  const options = {
    from: `"Berwaz Gallery" <${process.env.SENDER_EMAIL_ADDRESS}>`,
    to: 'Mu7ammadabed@gmail.com',
    subject: `Berwaz Gallery`,
    html: `<h4 style="text-align : left">Dear ${userId}</h4>
          <p style="text-align : left; margin-bottom:0px;">Thank you for your purchase from Berwaz Gallery
          </p> 
          <p style="text-align : left; margin-top:0px;">ORDER ID: 121</b></p>
          <p style="text-align : left; margin-top:0px;">ORDER date: June 28, 2020</b></p>
          <p style="text-align : left">Berwaz Team</p>
   `,
  };

  await transporter.sendMail(options);
};
module.exports = sendMail;
