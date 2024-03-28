import mongoose from "mongoose";
import { InvalidateCacheProps } from "../types/type.js";
import { Product } from "../models/product.js";
import { mynodecache } from "../app.js";
export const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017",{
        dbName:"Ecommerce_2024",
    })
    .then(()=>{console.log("Database connected succesfully...")})
    .catch((e)=>{console.log("something error happened in database connection")})
}

export const invalidateCache=async ({product,order,admin}:InvalidateCacheProps)=>{
    if(product){
        const productKeys:string[]=[
            "latestproducts","categories","products"
        ]
        const products=await Product.find({}).select("_id");
        products.forEach(i => {
            productKeys.push(`product-i._id`);
        });
        mynodecache.del(productKeys)
    }

    if(order){

    }
    if(admin){

    }
}