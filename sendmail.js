var nodemailer = require('nodemailer');
var send=(mail,string)=>{
const log = console.log;


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '', // TODO: your gmail account
        pass:'' // TODO: your gmail password
    }
});
//var owners=['f.mahmoud090@gmail.com','mostafa.magdy621@gmail.com']
// Step 2
let mailOptions = {
    from: '', // TODO: email sender
    to: mail, // TODO: email receiver
    subject: 'Gornalgy News',
    text: string
};
// app.get('/123',(req,res)=>{
// 	res.send('confermation is done');
// })

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log(err);
    }
    return log('Email sent!!!');
    });
};
module.exports=send;