// fs.writeFile(file, data[, options], callback)

import { writeFile } from "node:fs";

writeFile("intant.txt", "This message from index.js .", function () {
  console.log("It's written sir");
});

// fs.readFile(path[, options], callback)
import { readFile } from "node:fs";

readFile("./intant.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
