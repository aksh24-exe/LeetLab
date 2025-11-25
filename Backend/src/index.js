import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "../Backend/.env" });

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Welocome to leetcode backend api" });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
