const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const helpRoutes = require("./routes/helpRoutes");
app.use("/api", helpRoutes);
const storyRoutes = require("./routes/storyRoutes");
app.use("/api/stories", storyRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
