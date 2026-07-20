import express from "express";
import { createTask, getAllTasks, updateTask, doneTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/getalltasks", getAllTasks);
router.post("/addtask", createTask);
router.patch("/updatetasktitle/:id", updateTask);
router.patch("/donetask/:id", doneTask);
router.delete("/deletetask/:id", deleteTask);

export default router;  