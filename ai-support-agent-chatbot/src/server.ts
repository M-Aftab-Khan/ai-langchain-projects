import express from "express";
import cors from "cors";
import dotenv from "dotenv";  
import chatRoute from "./routes/chat.route";

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())

// Quick check you are hitting this app (GET works in the browser)
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, name: "ai-support-agent-chatbot" });
});

app.use("/api", chatRoute)

export default app;