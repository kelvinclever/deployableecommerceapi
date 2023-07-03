import { Router } from "express";
import { verifyToken } from "../middleware/authenticateroutes.js";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.controllers.js";

export const orderRouter = Router();

orderRouter.post("/new", createOrder);
orderRouter.get("/", verifyToken, getAllOrders);
orderRouter.get("/:order_id", verifyToken, getOrderById);
orderRouter.put("/:order_id", verifyToken, updateOrder);
orderRouter.delete("/:order_id", verifyToken, deleteOrder);
