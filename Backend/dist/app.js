import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import productRoute from "./routes/product.js";
import NodeCache from "node-cache";
const port = 4000;
const app = express();
connectDB();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("api working now baby...");
});
export const mynodecache = new NodeCache();
app.use(errorMiddleware);
//using routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/uploads", express.static("uploads"));
app.listen(port, () => {
    console.log(`app started at server ${port}`);
});
