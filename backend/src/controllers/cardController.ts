import { Card } from "../models/card";
import { Request, Response } from "express";
import {z} from 'zod';

const userInput=z.object({
    id:z.string().min(1,{message:"id cannot be empty"}),
    title:z.string().min(1,{message:"title cannot be empty"}),
    description:z.string().optional()
})

type InputParam=z.infer<typeof userInput>;

const listCards= async (req:Request,res:Response)=>{
    try{
        const cards=await Card.find();
        if(cards.length===0){
            return res.status(400).json({
                success:false,
                message:"empty cards",
            })
        }
        return res.status(200).json({
            success:true,
            cards
        })
    }catch(err){
        console.log(err);
        return  res.status(400).json({
            success:false,
            message:"error while fetching cards"
        })
    }
}

const createCard =async(req:Request,res:Response)=>{
    try {
        const {success}=userInput.safeParse(req.body);
        if(!success){
            return res.status(400).json({
                success,
                message:"data not provided"
            })
        }
        const data:InputParam=req.body;
        const newPost=await Card.create(data);
        return res.status(200).json({
            success,
            message:"entry created successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"error while create Cards",
        })
    }
}

const editorByTitle=async (req:Request,res:Response)=>{
    try {
        const {title}=req.params;
        if(!title){
            return res.status(200).json({
                success:false,
                message:"title not present"
            })
        }
        const cards=await Card.find({title:title});

        if(cards.length===0){
            return res.status(400).json({
                success:false,
                message:"try to access non existing card",
            })
        }

        return res.status(200).json({
            success:true,
            cards,
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            success:false,
            message:"error while fetching by title",
        })
    }
}

export default {listCards,createCard,editorByTitle};