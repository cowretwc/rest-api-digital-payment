/** Controller API */
import * as express from 'express'
import * as bcrypt from 'bcrypt'
import ResultInterface from '../lib/ResultInterface'
var result:ResultInterface = {error:true,message:``,result:{}};

class Auth
{
    login(req:express.Request,res:express.Response,next:express.NextFunction){
        const {username,password} = req.body
        bcrypt.hash(password,12,(err,hash)=>{
            result.message=hash
            res.json(result)
        })
    }
}

class ApiController
{
    info(req:express.Request,res:express.Response,next:express.NextFunction){
        
        console.log(result)
        next()
    }
}


export { ApiController, Auth }