import { createToolCallingAgent, AgentExecutor } from "@langchain/classic/agents";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { llm } from "./llm.service";
import { tools } from "../tools";

const agentPrompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `You are a smart AI assistant.
  
  Rules:
  - Use calculator tool for math
  - Use weather tool when user asks about weather, temperature, forecast
  - If no tool needed, answer normally`,
    ],
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
