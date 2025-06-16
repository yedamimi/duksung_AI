import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/api/suggest", async (req, res) => {
  const { mood, time, location } = req.body;
  if (!mood || !time || !location) {
    return res.status(400).json({ error: "입력값이 부족합니다." });
  }

  const prompt = `
  지금 사용자 상태는 다음과 같아:
  - 기분: ${mood}
  - 시간: ${time}
  - 장소: ${location}

  이 상태를 고려해서 오늘 할 수 있는 활동을 하나 추천해줘.
  너무 뻔하지 않고, 현실적으로 가능한 아이디어면 좋겠어.
  간결하게 3~4줄로 설명해줘.
  `;

  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }]
    });
    const response = await result.response;
    const suggestion = response.candidates?.[0]?.content?.parts?.[0]?.text || "추천할 수 없습니다.";

    res.json({ suggestion });
  } catch (err) {
    console.error("Gemini API 오류:", err);
    res.status(500).json({ error: "서버 오류 발생" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
