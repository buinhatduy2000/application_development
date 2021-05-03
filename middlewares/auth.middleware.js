var Account = require("../models/account.model");

module.exports = {
    requireAuth: async function(req, res, next){
        if(!req.cookies.accountId){
            res.redirect('/auth/login');
            return;
        }
        var account = await Account.find({id: req.cookies.accountId});
        
        if(!account){
            res.redirect('/auth/login');
            return;
        }
        res.locals.account = account;
        next();
    }
};