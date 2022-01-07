const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { getmessage, addmessage } = require("./user");
app.get("/user", async (req, res) => {
  const list = await getmessage();
  res.json(list);
});
app.post("/user-data", async (req, res) => {
  console.log(req.body);
  const message = re.body;
  await addmessage(message);
  res.json({ message: "message added" });
});

app.listen(4000, () => console.log("server started"));
