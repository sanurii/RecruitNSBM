import { Router } from "express";
import { authGuard, validate } from "../utils/validator.js";
import { body } from "express-validator";
import { LoginRecruiter, RegisterRecruiter, curruntRecruiter } from "../controllers/recruiter.controller.js";

const recruiterRoute = Router();
recruiterRoute.get('/current-recruiter' ,authGuard, curruntRecruiter);

recruiterRoute.post('/recruiter-register', validate([
    body('email').isEmail(),
    body('password').isLength({min:8})
]), RegisterRecruiter);

recruiterRoute.post('/recruiter-login', LoginRecruiter);



// recruiterRoute.get('/findCompany' , )
export default recruiterRoute;