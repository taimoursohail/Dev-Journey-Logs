import { name } from "ejs";
import express from "express";

const app = express();
const port = 3000;

// Midlleware to serve static files
app.use(express.static("public"));
app.use(express.urlencoded({ encode: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.post("/submit", function (req, res) {
  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.text,
  };
  console.log(data);
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
