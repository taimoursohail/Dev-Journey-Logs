import express from "express";
import ejs from "ejs";

const app = express();
const PORT = 3000;

// Parsing middleware to handle URL-encoded data
app.use(express.urlencoded({ extended: true }));

//set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", "./views");

//serve static files from the "public" directory
app.use(express.static("public"));

// Logical Vanialla JS array of band name components
const adjectives = ["Flying", "Silent", "Crimson", "Mystic", "Thunderous"];

const nouns = ["Wolves", "Tigers", "Dragons", "Phoenixes", "Shadows"];

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//root route
app.get("/", (req, res) => {
  const bandName = getRandomElement(adjectives) + " " + getRandomElement(nouns);
  res.render("index", {
    title: "Band Generator",
    currentYear: new Date().getFullYear(),
  });
});

app.post("/generate", (req, res) => {
  const bandName = getRandomElement(adjectives) + " " + getRandomElement(nouns);
  res.render("index", {
    title: "Band Generator",
    currentYear: new Date().getFullYear(),
    bandName: bandName,
  });
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
