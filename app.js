const express = require("express");
const path = require("path");
const checklistRouter = require("./src/routes/checklist");
const taskRouter = require("./src/routes/task");
const rootRouter = require("./src/routes/index");
const methodOverride = require("method-override");
require("./config/database");

const app = express();

app.use(express.json()); // Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rootRouter); // usando um middleware personalizado
app.use("/checklists", checklistRouter); // usando um middleware personalizado
app.use("/checklists", taskRouter.checklistDependent); // usando um middleware personalizado
app.use("/tasks", taskRouter.simple); // usando um middleware personalizado

app.listen(3000, () => {
  console.log("Servidor Online");
});
