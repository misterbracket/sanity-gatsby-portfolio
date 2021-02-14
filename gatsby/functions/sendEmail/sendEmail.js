const nodemailer = require('nodemailer');
let AWS = require('aws-sdk');


function generateResponseEmail({ name }) {
  return (`<div>
    <h2>Hi, ${name}</h2>
      <p>Thank you for your message! I will get back to you as soon as possible 📬</p>
    </div>`);
 }

 function generateMyEmail({ name, email, message }) {
  return (`<div>
    <h2>NEW MESSAGE FROM THE PORTFOLIO</h2>
    <p>Hi Max,</p>
    <p>Someone wants to talk to you</p>
    <ul>
      <li>Name : ${name}</li>
      <li>Email: ${email}</li>
      <li>Message: ${message}</li>
    </ul>
  </div>`);
 }

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: "us-east-1"
});

const transporter = nodemailer.createTransport({
  SES: new AWS.SES({
      apiVersion: '2010-12-01'
  }),

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

//   // send the email to person
//   const info = await transporter.sendMail(
// {
//     from: "Maximilian Klammer <max@maxklammer.com>",
//     to: `${body.name} <${body.email}>`,
//     subject: 'Thank you for reaching out!',
//     html: generateResponseEmail({ name: body.name, })
//   }
//   );

  // send the email to myself
  const infoToMe = await transporter.sendMail(
  {
    from: '"Portfolio Website" <portfolio@maxklammer.com>',
    to: '"Maximilian Klammer" <maximilian.klammer@gmail.com>',
    subject: 'New Message from Protfolio',
    html: generateMyEmail({ name: body.name, email: body.email, message: body.message})
  }
  );
  console.log(infoToMe)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
