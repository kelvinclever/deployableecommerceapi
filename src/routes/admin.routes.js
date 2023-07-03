import { Router } from "express";
import {
  addadmin,
  adminlogin,
  deleteAdmin,
  getAlladmin,
  updateAdmin,
} from "../controllers/admin.controllers.js";

export const adminRouter = Router();

adminRouter.post("/new", addadmin);
adminRouter.post("/loginadmin", adminlogin);
adminRouter.delete("/:id/delete", deleteAdmin);
adminRouter.get("/", getAlladmin);
adminRouter.put("/:id/update", updateAdmin);
