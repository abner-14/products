const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", { titulo: "inicio EJS" });
  });

  app.listen(PORT, () => {
    console.log(`App corriendo en el puerto ${ PORT }`);
});