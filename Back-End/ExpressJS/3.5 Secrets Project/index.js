//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    console.log("Access granted");
    next();
  } else {
    res.send("<h1>Access Denied</h1><p>Incorrect Password</p>");
    console.log("Access denied");
  }
}

// End Points

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", checkPassword, (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
  console.log("Access granted");
});

// Start Server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
