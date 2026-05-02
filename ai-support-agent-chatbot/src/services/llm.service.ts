import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";
dotenv.config();

//Configure LLL (OpenAI - GPT-4)

export const llm = new ChatOpenAI({
     model: "gpt-4o-mini",
     apiKey: process.env.OPENAI_API_KEY,
     temperature: 0.7,
})