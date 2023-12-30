import {Router} from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


const loginRouter = Router();

loginRouter.use(cookieParser());
loginRouter.use(passport.initialize());


loginRouter.get('/microsoft', (req, res, next) => {
    const origin = req.get('Origin') || req.get('Referer');
    req.session.origin = origin;
    passport.authenticate('auth-microsoft', {prompt: 'select_account', session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({message: 'Authentication failed'});
        }
        res.json({token});
    })(req, res, next);
});

loginRouter.get('/microsoft/callback', passport.authenticate("auth-microsoft", {
    failureRedirect: '/auth/microsoft',
    session: false
}), (req, res) => {

    var origin_domain = req.session.origin
    try {
        const token = req.user.refreshToken.access_token;
        console.log(token)
        const userString = JSON.stringify(token)
        res.send(`
        <!DOCTYPE html>
    <html lang="en">
      <body>
      </body>
      <script>
        window.opener.postMessage(${userString}, '${origin_domain}')
      </script>
    </html>
        `)
    } catch (error) {
        res.json({error: error})
    }
});


export {loginRouter};