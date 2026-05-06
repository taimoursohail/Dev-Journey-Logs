import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Home Page</h1> <p>Hello World! This is a GET request. from Home Page</p> <button onclick=\"window.location.href='/about'\">Go to About Page</button>"
  );
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>About Page</h1> <p>Hello World! This is a GET request. from About Page</p>"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
