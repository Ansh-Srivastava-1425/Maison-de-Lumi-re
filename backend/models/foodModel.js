import mongoose from "mongoose"

const foodSchema = new mongoos.Schema({
    name : {type:string,required:true},
    descripton : {type:string,required:true},
    price : {type:Number,required:true},
    image : {type:string,required:true},
    category : {type:string,required:true},
})

const foodModel = mongoose.model.food || mongoose.model("food" , foodSchema)

export default foodModel;


