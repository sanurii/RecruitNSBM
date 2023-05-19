import { Router} from "express";
import {addForJob}  from '../controllers/applicant.controller.js'
import upload from '../utils/upload.js'

const applicantRouter = Router()


applicantRouter.post('/apply',upload.single('cv'),addForJob)


export default applicantRouter