// Generar version de produccion
// heroku --version
// heroku login
// heroku create
// npm i -S express path
// npm run build (si se modifica algo de public y src se corre de nuevo npm run build)
// node server.js
// se modifica el script del package.json "start": "react-scripts start" por "start": "node server.js"
// npm run start
// git remote add heroku https://git.heroku.com/dry-fortress-18216.git (si no tengo el remote)
// git add .
// git commit
// git push heroku master

const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);