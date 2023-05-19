import Applicant from '../models/applicant.js'

export const addForJob = async(req,res) =>{

    try{

        const {applicantName ,applicantEmail} = req.body;
        const newApplicant = new Applicant({
            applicantName ,
            applicantEmail,
        })

        if(req.file){

            newApplicant.cv = req.file.path
            console.log(newApplicant.cv)
        }

        
        await newApplicant.save();

        res.status(200).send(newApplicant);

    }catch(err){
        res.status(400).send({err:err})
    }
}