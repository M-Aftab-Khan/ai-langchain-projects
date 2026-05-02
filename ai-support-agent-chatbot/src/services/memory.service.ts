import { BufferMemory } from "@langchain/classic/memory";

export const memory = new BufferMemory({
    memoryKey: "chat_history",
    returnMessages: true,
});