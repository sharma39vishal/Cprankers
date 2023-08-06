const router = require("express").Router();
var nodemailer = require('nodemailer');

router.post('/mailsender', async (req, res) => {
    try {
        const {mail,password,sendmail,subject,message}=req.body;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: mail,
              pass: password
            }
          });
          var mailOptions = {
            from: mail,
            to: sendmail,
            subject: subject,
            text: message
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).send('Email sent: ' + info.response);
            }
          });
    } catch (error) {
        res.status(500).send('Something went wrong');
      }
});

router.post('/mailsender/:id', async (req, res) => {
    try {
        const {sendmail,subject,message}=req.body;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'fakemailer39@gmail.com',
              pass: req.params.id
            }
          });
          var mailOptions = {
            from: 'fakemailer39@gmail.com',
            to: sendmail,
            subject: subject,
            text: message
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).send('Email sent: ' + info.response);
            }
          });
    } catch (error) {
        res.status(500).send('Something went wrong');
      }
});

module.exports = router;