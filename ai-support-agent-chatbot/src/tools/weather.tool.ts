import {tool} from "@langchain/core/tools";
import {z} from "zod";
import axios from "axios";

export const weatherTool = tool(
    async ({city}: {city:string}) =>{
        try{
            const apiKey = process.env.WEATHER_API_KEY;
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = response.data;
            console.log("data", data);
            return `Weather in ${city}:
            Temperature: ${data.main.temp}°C
            Feels like: ${data.main.feels_like}°C
            Condition: ${data.weather[0].description}
            Humidity: ${data.main.humidity}%`;
        }catch(err:any) {
            return "Unable to fetch weather. Please check city name.";
        }
            
        },
        {
            name: "weather",
            description:
              "Get current weather of a city. Use when user asks about weather.",
            schema: z.object({
              city: z.string(),
            }),
          }
        );
