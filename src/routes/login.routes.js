import {Router} from 'express';
const router = Router();

import {Login} from '../controllers/login.controllers.js';

// Routes Login
/**
 * @openapi
 * /utnbackend/v1/login:
 *   post:
 *     tags:
 *       - Login
 *     summary: Login Users
 *     description: Login user at the system.
 *     requestBody:
 *       description: User data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_email:
 *                 type: string
 *                 example: example@utn.edu.ec    
 *               password:
 *                 type: string
 *                 example: ........
 *             required:
 *               - user_email
 *               - password
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Login
 *                 data:
 *                   type: object
 *                   properties:
 *                     user_email:
 *                       type: string
 *                       example: example@utn.edu.ec    
 *                     password:
 *                       type: string
 *                       example: ..........
 */
router.post('/', Login);

export {router};
