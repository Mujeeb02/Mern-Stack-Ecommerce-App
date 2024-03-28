import {Request,Response, NextFunction } from "express";

export interface newuserRequestbody{
    _id:string;
    name:string;
    photo:string;
    email:string,
    role:string;
    gender:string;
    dob:Date;
}

export interface newproductRequestbody{
    name:string;
    price:Number;
    stock:Number;
    category:string;
}

export type ControllerType=(
    req: Request,
    res: Response,
    next: NextFunction
)=>Promise<void | Response<any,Record<string,any>> | undefined>

export type SearchRequestQuery={
    
    search?:string;
    price?:string;
    stock?:string;
    category?:string;
    sort?:string;
    page?:string;
}

export interface BaseQuery{
    name?:{
        $regex:string,
        $options:string
    };
    price?:{$lte:number};
    category?:string;
}

export type InvalidateCacheProps={
    product?:boolean;
    order?:boolean;
    admin?:boolean;
}