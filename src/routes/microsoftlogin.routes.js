import {Router} from 'express';
const router_microsoft = Router();
import passport from 'passport';

router_microsoft.get('/microsoft', passport.authenticate("auth-microsoft", {
    prompt: "select_account",
    session: false
}))

router_microsoft.get('/microsoft/callback', passport.authenticate("auth-microsoft", {
    failureRedirect: '/auth/microsoft',
    session: false
}), (req, res) => {
    //res.status(200).json({user: req.user, accessToken: "Token"})
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.json({error: error})
    }
});

export {
    router_microsoft
}   