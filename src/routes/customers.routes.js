import { Router } from "express";
import {
  addCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getAllCustomers,
} from "../controllers/customers.controllers.js";

export const customerRouter = Router();

customerRouter.get("/", getAllCustomers);
customerRouter.post("/new", addCustomer);
customerRouter.get("/:customer_id", getCustomerById);
customerRouter.put("/:customer_id/update", updateCustomer);
customerRouter.delete("/:customer_id/delete", deleteCustomer);
