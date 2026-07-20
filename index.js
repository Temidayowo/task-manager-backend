import express from "express";
import dotenv from "dotenv";
import tasksRoutes from "./routes/tasksRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT;

connectDB();

let app = express();

app.use(express.json());
app.use("/api/tasks", tasksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});