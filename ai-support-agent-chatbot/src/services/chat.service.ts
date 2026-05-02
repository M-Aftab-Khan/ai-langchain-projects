import {llm} from "./llm.service";
import {chatPrompt} from "./prompt.service";
import {memory} from "./memory.service";
import {RunnableSequence} from "@langchain/core/runnables";

export const chatChain = RunnableSequence.from([
   async(input: {input: string}) => {
    const history = await memory.loadMemoryVariables({});
    return {
        input: input.input,
        chat_history: history.chat_history || [],
    }
   },
   chatPrompt,
   llm,
]);