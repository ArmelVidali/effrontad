// Import the required modules
const express = require("express");

// Create an instance of Express
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or 3000 by default

// Define a sample route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
