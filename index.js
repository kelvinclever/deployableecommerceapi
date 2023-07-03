import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { authRouter } from "./src/routes/auth.routes.js";
import { productRouter } from "./src/routes/products.routes.js";
import { orderRouter } from "./src/routes/orders.routes.js";
import { customerRouter } from "./src/routes/customers.routes.js";
import { adminRouter } from "./src/routes/admin.routes.js";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/customers", customerRouter);
app.use("/admins", adminRouter);
const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send("hey this is QCS api");
});

app.listen(PORT || 5000, () => {
  console.log(`Server is up and running on port `);
});
