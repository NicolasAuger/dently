  /**
 * Created by leroy on 17/01/2017.
 */

  console.log("test");
  function sendmail(){
    console.log("test")
  }
  var nodemailer = require('nodemailer');

  var router = express.Router();
  app.use('/sayHello', router);
  router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

  function handleSayHello(req, res) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'leroy.p33@live.fr', // Your email id
        pass: 'password' // Your password
      }
    });
  }

  var mailOptions = {
    from: 'example@gmail.com>', // sender address
    to: 'leroy.p33@live.fr', // list of receivers
    subject: 'Email Example', // Subject line
    text: "toto" //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    };
  });
