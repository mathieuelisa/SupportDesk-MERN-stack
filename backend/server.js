import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "ceci est un test" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
