import {Router} from 'express';
const router_users = Router();

import {getUsers} from '../controllers/users/users.controllers.js';
//Routes Users
/**
 * @openapi
 * /utnbackend/v1/users:
 *   get:
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router_users.get('/utnbackend/v1/users', getUsers);

export {
    router_users
}