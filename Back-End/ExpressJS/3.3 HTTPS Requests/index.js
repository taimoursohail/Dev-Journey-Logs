import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello, HTTPS!");
});

app.post("/registration", (req, res) => {
  res.send("Data received via POST request.");
});

app.put("/data", (req, res) => {
  res.send("Data updated via PUT request.");
});

app.patch("/data", (req, res) => {
  res.send("Data patched via PATCH request.");
});

app.delete("/data", (req, res) => {
  res.send("Data deleted via DELETE request.");
});
