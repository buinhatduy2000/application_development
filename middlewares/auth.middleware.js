var db = require('../db')

module.exports = {
    requireAuth: function(req, res, next){
        if(!req.cookies.accountId){
            res.redirect('/auth/login');
            return;
        }
        var account = db.get('accounts').find({id: req.cookies.accountId}).value();
        
        if(!account){
            res.redirect('/auth/login');
            return;
        }
        res.locals.account = account;
        next();
    }
};