import { Router } from 'express';
import { getAssignmentsModules} from '../controllers/getmodules.js';

const getmRouter = Router();

getmRouter.get('/', getAssignmentsModules);

export { getmRouter };