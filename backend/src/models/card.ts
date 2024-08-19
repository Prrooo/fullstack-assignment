import mongoose, { Mongoose } from "mongoose";

const cardSchema=new mongoose.Schema({
    id:{
        type:String,
        require:true,
        unique:true,
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String
    }
})

export const Card=mongoose.model('Card',cardSchema);