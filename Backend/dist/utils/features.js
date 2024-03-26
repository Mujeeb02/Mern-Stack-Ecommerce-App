import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "Ecommerce_2024",
    })
        .then(() => { console.log("Database connected succesfully..."); })
        .catch((e) => { console.log("something error happened in database connection"); });
};
