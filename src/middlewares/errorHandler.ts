import {Request,Response,NextFunction,RequestHandler} from 'express'
import {Output,Payload,Options} from "@hapi/boom"

export default async function errorHandler(err:any,req:Request,res:Response,next:NextFunction) {
 
    
    return res.status(err.output.statusCode).json(err.output.payload)
}