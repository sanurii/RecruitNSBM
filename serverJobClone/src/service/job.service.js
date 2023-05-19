import Job from '../models/jobApp.js'
import RecruiterService from './recruiter.service.js'
async function registerJob(recuiterEmail,jobTitle,jobStatus,jobType,feild,position,skill, description){
    const company = await RecruiterService.findRecruiterCompany(recuiterEmail);
    // console.log(companyName);
    const newJob = new Job({
        recuiterEmail,
        jobTitle,
        jobStatus,
        jobType,
        feild,
        position,
        skill,
        company,
        description
    });
    
    await newJob.save();
    const job =  JSON.parse(JSON.stringify(newJob));
    return job

}

async function recuiterJob(email){
    console.log(email)
    const recuiterJob = await Job.find({recuiterEmail:email})
    console.log(email)
    return recuiterJob
}


export default {
    registerJob,
    recuiterJob
}