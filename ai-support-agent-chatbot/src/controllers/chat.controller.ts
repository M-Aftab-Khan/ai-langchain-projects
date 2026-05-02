import { Request, Response } from "express";
import { llm } from "../services/llm.service";
import { success } from "zod";

export const chatController = async(req:Request, res:Response) => {
    try{
        const {message} = req.body;
        if (!message) {
        return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }
    const response = await llm.invoke(message);

    return res.json({
      success: true,
      reply: response.content,
    });

    }catch(err:any) {
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}