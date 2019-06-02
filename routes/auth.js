var express = require('express');
var router = express.Router();
var User = require('../db/User');
var {generateHash }=require('random-hash');

/* GET home page. */


module.exports = function (passport) {
    //sign up post
    router.post('/signup', function (req, res) {
        var body = req.body,
        name=body.name,
            username = body.username,
            password = body.password;
        User.findOne({
            username: username
        }, function (err, doc) {
            if (err) {
                res.status(500).send(err)
            } else {
                if (doc) {
                    res.status(500).send('Username already exists')
                } else {
                    var record = new User()
                     record.name = name;
                    record.username = username;
                    record.password = record.hashPassword(password);
                      //new line test

                     record.hash=generateHash();
                    record.save(function (err, user) {
                        if (err) {
                            res.status(500).send('db error')
                        } else {
                               require('./../sendmail.js')(username,`Welcome in Gornalgy news please confirm your account http://localhost:5000/rn/${user.hash}`);
                            res.redirect('/login')
                        }
                    })
                }
            }
        })
    });
router.post('/contact',(req,res)=>{
   require('./../sendmail')('gornalgynews123@gmail.com',`Feedback on Gornalgy News \n His/Her name is  ${req.body.name} \n and His/Her E-mail is ${req.body.email} \n The subject is  ${req.body.subject} \n The message is ${req.body.message} `);
      require('./../sendmail')(`${req.body.email}`,' Thanks for your Feedback :D ');
      res.status(204).send();
})

    router.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/profile',
    }), function (req, res) {
        res.send('hey')
    })
    return router;
};