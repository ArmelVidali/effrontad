const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToDatabase, runQuery } = require("./database");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
const port = 3001;
app.listen(port, () => {
  console.log("Listening on port 3001");
});

(async () => {
  try {
    const pool = connectToDatabase();
  } catch (error) {
    console.error("Error connecting to Azure database:", error);
  }
})();

app.get("/", async (req, res) => {
  var table = req.query.table;
  try {
    const queryResult = await runQuery(table);
    res.json(queryResult);
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
});
