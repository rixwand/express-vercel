import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(9001);
