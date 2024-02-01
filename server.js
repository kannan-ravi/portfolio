import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on https:localhost http://localhost:${PORT}`);
});
