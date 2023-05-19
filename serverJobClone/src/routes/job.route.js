import { Router} from "express";
// import { body } from "express-validator";
import { addJob,allJobs,getJobByRecuiter} from "../controllers/job.control.js";
// import { authGuard, validate } from "../utils/validator.js";

const jobRouter = Router(); 

jobRouter.post('/addJob' ,  addJob);
jobRouter.get('/getJob' ,  allJobs);
jobRouter.get('/getJobByRecuiter',getJobByRecuiter)

export default jobRouter;