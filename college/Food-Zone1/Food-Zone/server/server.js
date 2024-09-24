require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const authRoute = require("./router/auth-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoute);

app.use(errorMiddleware);

const PORT = 3001;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
});
