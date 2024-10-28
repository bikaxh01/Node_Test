import express from "express";

const port = 3000;
const app = express();
app.set('trust proxy',true)


app.get("/", (req, res) => {

    console.log("Request Camed");
    const Address = req.socket.remoteAddress
  console.log("🚀 ~ app.get ~ req:", Address);

  res.status(200).json({message:"Server is running",ip:Address});
});

app.listen(port, () => console.log(`Running at ${port}`));
