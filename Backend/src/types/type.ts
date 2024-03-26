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

export type ControllerType=(
    req: Request,
    res: Response,
    next: NextFunction
)=>Promise<void | Response<any,Record<string,any>> | undefined>