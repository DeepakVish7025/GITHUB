const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const repoRoutes = require("./routes/repoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// routes
app.use("/api", repoRoutes);

// simple home route
app.get("/", (req, res) => {
  res.send("GitHub Favorites API Running");
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});