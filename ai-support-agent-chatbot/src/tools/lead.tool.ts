import {tool} from "@langchain/core/tools";
import {z} from "zod";
import { prisma } from "../lib/prisma";

export const leadTool = tool(
    async({query}: {query: string}) => {
        try{
            const leads = await prisma.lead.findMany({
                where: {
                    OR: [
                        { name: { contains: query, mode: "insensitive" } },
                        { email: { contains: query, mode: "insensitive" } },
                    ],
                },
                take: 5,
            });

            if(leads.length === 0) {
                return "No leads found";
            }

            return leads.map((lead:any) => ({
                name: lead.name,
                email: lead.email,
                status: lead.status,
               
            }));
        }catch(err:any) {
            return "Error fetching leads";
        }
    },
    {
        name: "get_leads",
        description:
          "Search leads by name or email. Use when user asks about leads or customers.",
        schema: z.object({
          query: z.string(),
        }),
      }
)