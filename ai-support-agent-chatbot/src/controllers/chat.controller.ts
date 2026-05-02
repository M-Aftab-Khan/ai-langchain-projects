import { Request, Response } from "express";
import { agentExecutor } from "../services/agent.service";

export const chatController = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    const result = await agentExecutor.invoke({
      input: message,
    });

    return res.json({
      success: true,
      reply: result.output,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};