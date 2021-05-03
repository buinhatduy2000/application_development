var Account = require("../models/account.model");

module.exports = {
    requireAuth: function(req, res, next){
        if(!req.cookies.accountId){
            res.redirect('/auth/login');
            return;
        }
        var account = Account.find({id: req.cookies.accountId});
        
        if(!account){
            res.redirect('/auth/login');
            return;
        }
        res.locals.account = account;
        next();
    }
};