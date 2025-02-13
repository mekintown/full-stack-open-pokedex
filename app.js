const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = 3000;
// const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log("server started on port 3000");
});
