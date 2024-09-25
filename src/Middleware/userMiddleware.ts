import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

export function validateToken(req:Request, res:Response, netx:NextFunction){
    const token = req.header('Authorization')?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Acceso denegado '});
    }
    try{
        jwt.verify(token as string, process.env.JWT_SECRET as string, (err)=>{
            if(err){
                console.error('Acceso denegado, token caducado o incorrecto', err.message);
                return res.status(401).json({message:'Acceso denegado, token caducado o incorrecto'})
            }else{
                console.log('autenticado');
                netx();
            }
        });
    }catch(error){
        console.error(error);
        return res.status(401).json({message: 'token invalido', error})
    }
}