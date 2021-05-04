var Account = require("../models/account.model");

module.exports = {
    requireAuth: async function (req, res, next) {
        if (!req.cookies.accountId) {
            res.redirect('/auth/login');
            return;
        }
        var account = await Account.find({ id: req.cookies.accountId });
        if (!account) {
            res.redirect('/auth/login');
            return;
        }
        // if (account.accountRole !== req.cookies.accountRole) {
        //     res.send("lewlew");
        //     return;
        // }
        console.log(req.param);
        res.locals.account = account;
        next();

    },
};