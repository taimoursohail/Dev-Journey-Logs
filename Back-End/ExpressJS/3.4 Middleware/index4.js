import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Middleware function to log request method and URL
app.use(express.urlencoded({ extended: true })); // This Middleware is  to parse URL-encoded bodies

//Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(
    `<h1>Form Submitted</h1> 
    <h3>Your Street Name is ${req.body.street}</h3>
    <h3>Your Pet Name is ${req.body.pet}</h3>
    <p>Your form has been successfully submitted.</p>`
  );

  console.log("Form Data:", req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
