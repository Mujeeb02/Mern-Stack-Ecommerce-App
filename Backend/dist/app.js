import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
const port = 4000;
const app = express();
connectDB();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("api working now baby...");
});
app.use(errorMiddleware);
//using routes
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`app started at server ${port}`);
});
