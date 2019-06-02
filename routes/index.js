var express = require('express');
var fetch=require('node-fetch');
//get model from the file
var db=require('./../db/User.js');

var router = express.Router();

var loggedin = function (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
}
router.get('/contact',(req,res)=>{
  res.render('contact');
});

//conform Email
router.get('/rn/:hashid',(req,res)=>{
db.updateOne({hash:req.params.hashid},{hash:''},(err,result)=>{
  if(result)
  {
     res.redirect('/login');
  }
});
});
//end

//test
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
//end



/* GET home page. */
router.get('/',function (req, res, next) {
  if(!(isEmpty(req.session.passport)))
  {
    console.log(req.session.passport);
    db.findOne({ _id:req.session.passport.user.id },(err,data)=>{
       var obj=
       { name:data.name,
        check:true};
        fetch('https://newsapi.org/v2/top-headlines?country=eg&apiKey=e4e664afac414cda8aca36b4d97046aa').then(data=> data.json()).then(json=>
//start render
{ res.render('index',{data:data.apiname,obj:obj,json:json});}
//end render
);
});

  }
  else
  {
    var obj=
       { name:'',
        check:false};
         fetch('https://newsapi.org/v2/top-headlines?country=eg&apiKey=e4e664afac414cda8aca36b4d97046aa').then(data=> data.json()).then(json=>{
           //strat render
        res.render('index',{data:[],obj:obj,json:json});
        //end render
         });

  }
  // res.render('index', {
  //   title: 'Express'
  // });

});


router.get('/login', function (req, res, next) {
  res.render('login');
});


router.get('/signup', function (req, res, next) {
  res.render('signup');
});


router.get('/profile', loggedin, function (req, res, next) {

     db.findOne({ _id:req.session.passport.user.id },(err,data)=>{
       // var obj=
       // { name:data.name,
       //  check:true};
     fetch('https://newsapi.org/v2/top-headlines?country=eg&apiKey=e4e664afac414cda8aca36b4d97046aa').then(data=> data.json()).then(json=> {
      res.render('profile', {
    user: data.apiname,
    json:json,
    obj:{check:true,name:data.name}


     });
      });

  console.log(data.apiname);
  });




 // res.send('this is profile')



});

//test




//start of delete item
router.get('/apidel/:name',loggedin,(req,res,next)=>{
//start of del in BD

console.log(req.params.name);
db.update({_id:req.session.passport.user.id},{$pull:{apiname:req.params.name}},(err,result)=>{
  if (err) {
    res.send(err);

//next();
  }
  else{
    //res.send(result);
    //  res.redirect('/');
      res.status(204).send();

    //next();
  }
});

//end



});


//end of delete item


//make get request

router.get('/api/:name',loggedin,(req,res,next)=>{

  db.findOne({apiname:req.params.name ,_id:req.session.passport.user.id },(err,data)=>{
if(data)
{
console.log(req.params.name);
console.log(data.apiname);
//res.redirect('/profile');
res.status(204).send();


}
else
{
db.findOneAndUpdate(
{_id:req.session.passport.user.id},
{ $push: { apiname: req.params.name  } },(err,result)=>{
  if(err)
  {
    res.send(err);
  }
  else
  {
    //res.send(result);
   //res.status(204).send();
//   res.redirect('/');
res.status(204).send();

  }
}
    );

  //end findone
}
  });
  //end of find one

});


  //end
  //start of count
//this is count to count the api
router.get('/count',(req,res)=>{
// db.count({api:"mostafa"},(er,result)=>{
// console.log(result);
// res.send({count:result});
// });
});

  //end





//3alashan ashouf el session
router.get('/session',(req,res)=>{
  console.log(req.session);
});
//end

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})
module.exports = router;
