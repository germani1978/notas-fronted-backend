import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  upadteTask,
  deleteTask,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", upadteTask);

router.delete("/tasks/:id", deleteTask);

export default router;
