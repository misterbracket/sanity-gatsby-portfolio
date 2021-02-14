const nodemailer = require('nodemailer');

function generateOrderEmail({ name }) {
  return (`<div>
    <h2>Hi, ${name}</h2>
    <p>Thank you for your message! I will get back to you as soon as possible 📬</p>

  </div>`);
 }

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Little function that makes you wait
function wait(ms = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  // Check if they have filled out the honeypot
  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Boop Beep bop zzssst good bye' }),
    };
  }
  // Validate the data coming in is correct
  const requiredFields = ['email', 'name', 'message'];

  for (const field of requiredFields) {
    console.log(`Checking that ${field} is good`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }

  // make sure they actually have items in that order
  if (!body.message.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Didn't you want to send me a message?!`,
      }),
    };
  }

  // send the email
  const info = await transporter.sendMail(
{
    from: "Maximilian Klammer <max@maxklammer.com>",
    to: `${body.name} <${body.email}>, maximilian.klammer@gmail.com`,
    subject: 'Thank you for reaching out!',
    html: generateOrderEmail({ name: body.name, })
  }
  );
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
