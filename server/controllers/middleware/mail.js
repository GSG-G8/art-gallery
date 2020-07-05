const nodemailer = require('nodemailer');

const sendMail = async (userId, customerData, sellingOperation) => {
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
    to: customerData.email,
    subject: `Berwaz Gallery`,
    html: `<h3 style="text-align : left">Dear ${customerData.first_name} ${
      customerData.last_name
    }</h3>
          <h2 style="text-align : left; margin-bottom:0px;">Thank you for your purchase from Berwaz Gallery
          </h2> 
          <h3 style="text-align : left; margin-top:0px;">ORDER ID: ${
            sellingOperation.id
          }</b></h3>
          <h3 style="text-align : left; margin-top:0px;">ORDER DATE: ${new Date(
            sellingOperation.selling_date,
          )}</b></h3>
          <h3 style="text-align : left; margin-top:0px;">Your New Budget: ${
            customerData.budget
          }</b></h3>
          <h2 style="text-align : left">Berwaz Team</h2>
   `,
  };

  await transporter.sendMail(options);
};
module.exports = sendMail;
