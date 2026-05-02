import { createToolCallingAgent, AgentExecutor } from "@langchain/classic/agents";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { llm } from "./llm.service";
import { tools } from "../tools";

const agentPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a helpful AI assistant for a software engineering platform.
You explain concepts clearly, step by step, and keep answers concise.
If user asks coding questions, provide production-ready examples.
Use the conversation history when the user refers to earlier messages or facts they shared (e.g. their name).
When the user asks for math, use the calculator tool.`,
  ],
//   new MessagesPlaceholder("chat_history"),
  ["human", "{input}"],
  new MessagesPlaceholder("agent_scratchpad"),
]);

const agent = createToolCallingAgent({
  llm,
  tools,
  prompt: agentPrompt,
});

export const agentExecutor = new AgentExecutor({
  agent,
  tools,
});
