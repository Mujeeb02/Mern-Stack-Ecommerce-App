import express from "express";
import { deleteUser, getAllUser, getUser, newUser } from "../controller/user.js";
const app = express.Router();
//routes
// route to post a new user in the database...
app.post("/new", newUser);
//route to getall user details present in the database...
app.get("/getall", getAllUser);
//route to get user by certain id...
app.get("/:id", getUser);
//route to delete a user
app.delete("/delete/:id", deleteUser);
export default app;
