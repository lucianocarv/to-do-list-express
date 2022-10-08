const express = require("express");
const path = require("path");
const checklistRouter = require("./src/routes/checklist");
const rootRouter = require("./src/routes/index");

require("./config/database");

const app = express();

app.use(express.json()); // Middleware
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rootRouter); // usando um middleware personalizado
app.use("/checklists", checklistRouter); // usando um middleware personalizado

app.listen(3000, () => {
  console.log("Servidor Online");
});
