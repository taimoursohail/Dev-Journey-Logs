import express from "express";
const app = express();
const PORT = 3000;

// Custom middleware to log request details
function logger(req, res, next) {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
}

app.use(logger);

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
