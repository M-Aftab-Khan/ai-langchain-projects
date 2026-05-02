import {tool} from "@langchain/core/tools";
import {z} from "zod";

export const calculatorTool = tool(
    async ({ expression }: { expression: string }) => {
        try{
            const result = eval(expression);
            return `Result: ${result}`;
        }catch(err:any) {
            return `Invalid Expression`;
        }

    },
    {
        name: "calculator",
        description:
          "Use this tool when user asks math calculations like 2+2, 10*5, etc.",
        schema: z.object({
          expression: z.string(),
        }),
      }
)