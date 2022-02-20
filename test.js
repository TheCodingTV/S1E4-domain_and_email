const nodemailer = require('nodemailer')

const mailTransporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp.exmail.qq.com',
  port: process.env.MAIL_PORT || 465,
  secure: process.env.MAIL_SECURE || true,
  auth: {
    user: process.env.MAIL_ADDRESS || 'mail@studyroom.com.cn',
    pass: process.env.MAIL_PASSWORD || 'Xv4mKQL6cBcb7FSK'
  }
})

const html = `
  <head>
  <title>Coding TV Episode4 - Domain</title>
  <style>
    * {
      box-sizing: border-box;
      position: relative;
    }

    body {
      margin: 0;
      background-color: #060C1F;
      font-family: 'Almarai', sans-serif;
      border-radius: 5px;
    }

    .container {
      height: 100vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    .content {
      border-radius: 5px;
    }

    .content::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 50%;
      box-shadow: 0 0 17px 3px #ffff01, 0 0 4px 2px #ffff01;
      z-index: -1;
      border-radius: 5px;
    }

    .content::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50%;
      height: 50%;
      box-shadow: 0 0 17px 3px #0ff, 0 0 4px 2px #0ff;
      z-index: -1;
      border-radius: 5px;
    }

    .text {
      font-size: 30px;
      margin: 0;
      position: relative;
      background-color: #060C1F;
      color: #fff;
      padding: 60px;
      border-radius: 5px;
    }
    .text1 {
      font-weight: 100;
      font-size: 24px;
      margin-bottom: 20px;
    }
  </style>
  </head>
  <body>
  <div class="container">
    <div class="content">
      <div class="text">
        <div class="text1">Coding TV</div>
        <div>我们已经收到了您的来信，会尽快回复</div>
      </div>
    </div>
  </div>
  </body>
`

mailTransporter.sendMail({
  from: '"Coding TV" <mail@studyroom.com.cn>',
  to: ["liukai9293@qq.com"],
  subject: 'Coding TV Hello',
  html
})