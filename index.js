import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello from node ec2 express server 🚀" });
});

app.get("/admin", (req, res) => {
  res.json({ message: "Hello admin S002x 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
