import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
app.set("trust proxy", true);
app.use(bodyParser())

app.get("/", (req, res) => {
  console.log("Request Camed");
  const Address = req.socket.remoteAddress;
  console.log("🚀 ~ app.get ~ req:", Address);

  res.status(200).json({ message: "Server is running", ip: Address });
});

app.post("/github", async (req, res) => {
  const body = req.body;

  console.log("🚀 ~ app.post ~ body:", body);
  res.json("OK");
});

app.listen(port, () => console.log(`Running at ${port}`));
