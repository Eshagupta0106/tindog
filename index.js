const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));

const route = express.Router();
const port = process.env.port || 5000;
app.use('/v1', route);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'somerealemail@gmail.com',
    pass: 'realpasswordforaboveaccount'
  }
}));
app.post("/learn",function(req,res){
  var email = req.body.email;
  var query = req.body.query;
  var mailOptions = {
    from: email,
    to: 'eshagupta0106@gmail.com',
    subject: 'Query',
    text: query
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });  

  res.send("Your BMI is: " +result);
})
