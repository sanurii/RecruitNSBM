import Rating from "../models/rating";

export const AddRate = async (req , res) => {
    const {amount} = req.body;

    const email = req.params['email'];
    
    const existingRating = await Rating.findOne({email});

    if(existingRating){
        return res.status(400).send({err: "user already rated"});
    }

    const newRate = new Rating({
        email , 
        rating:amount,
    });
    await newRate.save();
    const rateCpy =  JSON.parse(JSON.stringify(newRate));
    return res.status(200).send(rateCpy);

}