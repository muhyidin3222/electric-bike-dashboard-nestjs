import nodemailer from 'nodemailer';

export default async (configEmail) => {
  const USER_EMAIL: any = 'development@bisaekspor.com';
  const USER_PASSWORD: any = 'N3d6BOMXjSy0hGfU';

  const auth = {
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
      user: USER_EMAIL,
      pass: USER_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(auth, function (err, info) {
    if (err) {
      console.log(err, "'ERRORR SEND EMAIL TO CLIENT!'");
    } else {
      // console.log(info, 'SUCCESS SEND EMAIL TO CLIENT!');
    }
  });

  try {
    const resSuccess = await transporter.sendMail(configEmail);
    // console.log(resSuccess, 'SUCCESS SEND EMAIL');
    return resSuccess;
  } catch (error) {
    console.log(error);
  }
};
