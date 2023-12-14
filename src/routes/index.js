import { Router } from 'express';
const router = Router();

import { getClassroom, getClassroomById, creatClassroom, updateClassroom } from '../controllers/classroom.controller.js';
import { getAssignmentsClass,getAssignmentsClassById,updateAssignmentsClass,createAssignmentsClass} from '../controllers/assigment_class.controller.js'; 
import { getClassScore,getClassScoreById,createClassScore,updateClassScore } from '../controllers/class_score.controller.js';

//Routes Classrooms
/**
 * @openapi
 * /utnbackend/v1/classroom:
 *   get:
 *     tags:
 *       - Classroom
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
router.get('/utnbackend/v1/classroom',getClassroom);
/**
 * @openapi
 * /utnbackend/v1/classroom/{id}:
 *   get:
 *     tags:
 *       - Classroom
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the classroom to search
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
router.get('/utnbackend/v1/classroom/:id',getClassroomById);
/**
 * @openapi
 * /utnbackend/v1/classroom:
 *   post:
 *     tags:
 *       - Classroom
 *     requestBody:
 *       description: Classroom data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               class_subject:
 *                 type: string
 *                 example: astronomy
 *               class_date_start:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-12-13T05:00:00.000Z"
 *               class_date_finish:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-12-25T05:00:00.000Z"
 *               class_state:
 *                 type: boolean
 *                 example: false
 *             required:
 *               - class_subject
 *               - class_date_start
 *               - class_date_finish
 *               - class_state
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
 *                   example: Created
 *                 data:
 *                   type: object
 *                   properties:
 *                     class_id:
 *                       type: integer
 *                       example: 123
 *                     class_subject:
 *                       type: string
 *                       example: astronomy
 *                     class_date_start:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-12-13T05:00:00.000Z"
 *                     class_date_finish:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-12-25T05:00:00.000Z"
 *                     class_state:
 *                       type: boolean
 *                       example: false
 */
router.post('/utnbackend/v1/classroom',creatClassroom);
/**
 * @openapi
 * /utnbackend/v1/classroom:
 *   put:
 *     tags:
 *       - Classroom
 *     requestBody:
 *       description: Classroom data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               class_id:
 *                 type: integer
 *                 example: 5
 *               class_subject:
 *                 type: string
 *                 example: sciences
 *               class_date_start:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-12-13T05:00:00.000Z"
 *               class_date_finish:
 *                 type: string
 *                 format: date-time
 *                 example: "2023-12-25T05:00:00.000Z"
 *               class_state:
 *                 type: boolean
 *                 example: false
 *             required:
 *               - class_id
 *               - class_subject
 *               - class_date_start
 *               - class_date_finish
 *               - class_state
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
 *                   type: object
 *                   properties:
 *                     class_id:
 *                       type: integer
 *                       example: 5
 *                     class_subject:
 *                       type: string
 *                       example: sciences
 *                     class_date_start:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-12-13T05:00:00.000Z"
 *                     class_date_finish:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-12-25T05:00:00.000Z"
 *                     class_state:
 *                       type: boolean
 *                       example: false
 */

router.put('/utnbackend/v1/classroom',updateClassroom);
//Routes AssignmentsClass
/**
 * @openapi
 * /utnbackend/v1/assignments_class:
 *   get:
 *     tags:
 *       - Assignments Class
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
router.get('/utnbackend/v1/assignments_class',getAssignmentsClass);
/**
 * @openapi
 * /utnbackend/v1/assignments_class/{id}:
 *   get:
 *     tags:
 *       - Assignments Class
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Assignments Class to search
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
router.get('/utnbackend/v1/assignments_class/:id',getAssignmentsClassById);
/**
 * @openapi
 * /utnbackend/v1/assignments_class:
 *   post:
 *     tags:
 *       - Assignments Class
 *     requestBody:
 *       description: AssignmentsClass data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               class_id:
 *                 type: integer
 *                 example: 5
 *               user_id:
 *                 type: integer
 *                 example: 10
 *               assignment_class_state:
 *                 type: boolean
 *                 example: true
 *             required:
 *               - class_id
 *               - user_id
 *               - assignment_class_state
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: AssignmentsClass Added successfully
 *                 body:
 *                   type: object
 *                   properties:
 *                     assignments_class:
 *                       type: object
 *                       properties:
 *                         assignment_class_id:
 *                           type: integer
 *                           example: 1
 *                         class_id:
 *                           type: integer
 *                           example: 5
 *                         user_id:
 *                           type: integer
 *                           example: 10
 *                         assignment_class_state:
 *                           type: boolean
 *                           example: true
 */

router.post('/utnbackend/v1/assignments_class',createAssignmentsClass);
/**
 * @openapi
 * /utnbackend/v1/assignments_class:
 *   put:
 *     tags:
 *       - Assignments Class
 *     requestBody:
 *       description: AssignmentsClass data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               assignment_class_id:
 *                 type: integer
 *                 example: 1
 *               class_id:
 *                 type: integer
 *                 example: 5
 *               user_id:
 *                 type: integer
 *                 example: 10
 *               assignment_class_state:
 *                 type: boolean
 *                 example: true
 *             required:
 *               - assignment_class_id
 *               - class_id
 *               - user_id
 *               - assignment_class_state
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
 *                   type: object
 *                   properties:
 *                     assignment_class_id:
 *                       type: integer
 *                       example: 1
 *                     class_id:
 *                       type: integer
 *                       example: 5
 *                     user_id:
 *                       type: integer
 *                       example: 10
 *                     assignment_class_state:
 *                       type: boolean
 *                       example: true
 */

router.put('/utnbackend/v1/assignments_class',updateAssignmentsClass);
//Routes class_score
/**
 * @openapi
 * /utnbackend/v1/class_score:
 *   get:
 *     tags:
 *       - Class Score
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
router.get('/utnbackend/v1/class_score',getClassScore);
/**
 * @openapi
 * /utnbackend/v1/class_score/{id}:
 *   get:
 *     tags:
 *       - Class Score
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Class Score to search
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
router.get('/utnbackend/v1/class_score/:id',getClassScoreById);
/**
 * @openapi
 * /utnbackend/v1/class_score:
 *   post:
 *     tags:
 *       - Class Score
 *     requestBody:
 *       description: Class Score data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               class_id:
 *                 type: integer
 *                 example: 5
 *               user_id:
 *                 type: integer
 *                 example: 10
 *               score_one:
 *                 type: number
 *                 example: 85.5
 *               score_two:
 *                 type: number
 *                 example: 90.0
 *               score_three:
 *                 type: number
 *                 example: 75.8
 *               score_final:
 *                 type: number
 *                 example: 83.7
 *               score_approved:
 *                 type: boolean
 *                 example: true
 *               score_attendance_percentage:
 *                 type: number
 *                 example: 95.2
 *             required:
 *               - class_id
 *               - user_id
 *               - score_one
 *               - score_two
 *               - score_three
 *               - score_final
 *               - score_approved
 *               - score_attendance_percentage
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ClassScore Added successfully
 *                 body:
 *                   type: object
 *                   properties:
 *                     class_score:
 *                       type: object
 *                       properties:
 *                         class_score_id:
 *                           type: integer
 *                           example: 1
 *                         class_id:
 *                           type: integer
 *                           example: 5
 *                         user_id:
 *                           type: integer
 *                           example: 10
 *                         score_one:
 *                           type: number
 *                           example: 85.5
 *                         score_two:
 *                           type: number
 *                           example: 90.0
 *                         score_three:
 *                           type: number
 *                           example: 75.8
 *                         score_final:
 *                           type: number
 *                           example: 83.7
 *                         score_approved:
 *                           type: boolean
 *                           example: true
 *                         score_attendance_percentage:
 *                           type: number
 *                           example: 95.2
 */

router.post('/utnbackend/v1/class_score',createClassScore);
/**
 * @openapi
 * /utnbackend/v1/class_score:
 *   put:
 *     tags:
 *       - Class Score
 *     requestBody:
 *       description: ClassScore data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               class_score_id:
 *                 type: integer
 *                 example: 1
 *               class_id:
 *                 type: integer
 *                 example: 5
 *               user_id:
 *                 type: integer
 *                 example: 10
 *               score_one:
 *                 type: number
 *                 example: 90.0
 *               score_two:
 *                 type: number
 *                 example: 85.5
 *               score_three:
 *                 type: number
 *                 example: 88.2
 *               score_final:
 *                 type: number
 *                 example: 87.3
 *               score_approved:
 *                 type: boolean
 *                 example: true
 *               score_attendance_percentage:
 *                 type: number
 *                 example: 96.5
 *             required:
 *               - class_score_id
 *               - class_id
 *               - user_id
 *               - score_one
 *               - score_two
 *               - score_three
 *               - score_final
 *               - score_approved
 *               - score_attendance_percentage
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ClassScore Updated successfully
 *                 body:
 *                   type: object
 *                   properties:
 *                     class_score:
 *                       type: object
 *                       properties:
 *                         class_score_id:
 *                           type: integer
 *                           example: 1
 *                         class_id:
 *                           type: integer
 *                           example: 5
 *                         user_id:
 *                           type: integer
 *                           example: 10
 *                         score_one:
 *                           type: number
 *                           example: 90.0
 *                         score_two:
 *                           type: number
 *                           example: 85.5
 *                         score_three:
 *                           type: number
 *                           example: 88.2
 *                         score_final:
 *                           type: number
 *                           example: 87.3
 *                         score_approved:
 *                           type: boolean
 *                           example: true
 *                         score_attendance_percentage:
 *                           type: number
 *                           example: 96.5
 */

router.put('/utnbackend/v1/class_score',updateClassScore);


export { router};

