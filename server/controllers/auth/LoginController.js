const passport=require('passport');
module.exports={
    login(req, res, next){
        passport.authenticate('local', function(err, user, info) {      
           if (err) { return next(err); }
           if (!user) {  return res.status(400).json({err:'Valores invalidos'})}
           req.logIn(user, function(err) {
             if (err) { return next(err); }
             return res.send({user: user})
           });
         })(req, res, next);
   }
}