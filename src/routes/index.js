import { Router } from 'express';
const router = Router();

import { getClassroom, getClassroomById, creatClassroom, updateClassroom } from '../controllers/classroom.controller.js';
import { getAssignmentsClass,getAssignmentsClassById,updateAssignmentsClass,createAssignmentsClass} from '../controllers/assigment_class.controller.js'; 
import { getClassScore,getClassScoreById,createClassScore,updateClassScore } from '../controllers/class_score.controller.js';
//Routes Classrooms
router.get('/utnbackend/v1/classroom',getClassroom);
router.get('/utnbackend/v1/classroom/:id',getClassroomById);
router.post('/utnbackend/v1/classroom',creatClassroom);
router.put('/utnbackend/v1/classroom',updateClassroom);
//Routes AssignmentsClass
router.get('/utnbackend/v1/assignments_class',getAssignmentsClass);
router.get('/utnbackend/v1/assignments_class/:id',getAssignmentsClassById);
router.post('/utnbackend/v1/assignments_class',createAssignmentsClass);
router.put('/utnbackend/v1/assignments_class',updateAssignmentsClass);
//Routes class_score
router.get('/utnbackend/v1/class_score',getClassScore);
router.get('/utnbackend/v1/class_score/:id',getClassScoreById);
router.post('/utnbackend/v1/class_score',createClassScore);
router.put('/utnbackend/v1/class_score',updateClassScore);


export { router};

