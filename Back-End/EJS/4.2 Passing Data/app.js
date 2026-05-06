import express from "express";
const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Routes
app.get("/", (req, res) => {
  res.render("index", { fullName: "" });
});


app.post("/", (req, res) => {
  res.render("index", {
    fullName: req.body.fname + req.body.lname,
  });
  console.log(req.body.fname + req.body.lname);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
