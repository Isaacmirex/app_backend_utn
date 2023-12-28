import { Router } from "express";
const router_auditing = Router();


import { getAuditing,getAuditingById} from "../controllers/auditing/auditing.controller.js";
// Routes auditing
/**
 * @openapi
 * /utnbackend/v1/auditing:
 *   get:
 *     tags:
 *       - Auditing
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
router_auditing.get('/utnbackend/v1/auditing/', getAuditing);
/**
 * @openapi
 * /utnbackend/v1/auditing/{id}:
 *   get:
 *     tags:
 *       - Auditing
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Auditing to search
 *         schema:
 *           type: integer
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
 * 
 */
router_auditing.get('/utnbackend/v1/auditing/:id', getAuditingById);

export { router_auditing };