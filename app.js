const express = require("express");
const checklistRouter = require("./src/routes/checklist");

require("./config/database");

const app = express();

app.use(express.json()); // Middleware

app.use("/checklists", checklistRouter); // usando um middleware personalizado

app.listen(3000, () => {
  console.log("Servidor Online");
});
