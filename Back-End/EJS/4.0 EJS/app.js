// 1. Imports
import express from "express";
import path from "path";
import ejs from "ejs";

// 3. Global config / variables
const PORT = 3000;
const app = express();

// 5. Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Vanilla JS:

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = new Date();
let dayAlphabetic = days[today.getDay()];

// 6. Routes / Endpoints

app.get("/", (req, res) => {
  res.render("index.ejs", { kindOfDay: dayAlphabetic });
  console.log(dayAlphabetic);
});

// 7. Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
