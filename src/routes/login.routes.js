import {Router} from 'express';
const router = Router();

import {Login} from '../controllers/login.controllers.js';


router.post('/login', Login);



export {
    router
}   