import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";

export const chatPrompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `You are a helpful AI assistant for a software engineering platform.
You explain concepts clearly, step by step, and keep answers concise.
If user asks coding questions, provide production-ready examples.
Use the conversation history when the user refers to earlier messages or facts they shared (e.g. their name).`,
  ],
  new MessagesPlaceholder("chat_history"),
  ["human", "{input}"],
]);