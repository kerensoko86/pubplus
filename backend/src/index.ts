import express, { Application, json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  getEmployeesController,
  updateEmployeeController,
} from "./controllers/employeeController";
import { authenticateToken } from "./middlewares/authMiddleware";
import { loginController } from "./controllers/authController";

dotenv.config();

const app: Application = express();
const PORT = 4000;

app.use(cors());
app.use(json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post("/login", loginController);

app.get("/employees", authenticateToken, getEmployeesController);

app.put("/employees/:id", authenticateToken, updateEmployeeController);
