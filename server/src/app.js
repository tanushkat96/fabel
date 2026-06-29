const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const authRoutes=require("./routes/auth.routes");
const errorHandler = require("./middleware/errorHandler");
const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Fabel API is running",
  });
});

app.use("/api/auth",authRoutes);
app.use(errorHandler);

module.exports = app;