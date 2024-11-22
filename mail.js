const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alfifrancis2000@gmail.com',
    pass: 'a123@1',
  },
});
