import * as express from 'express'
import {ApiController,Auth} from '../app/controller/ApiController'
const router: express.Router = express.Router()


router.all('/',new ApiController().info)
router.post('/public/auth/login',new Auth().login)



router.use((req,res)=>{
    res.status(404).json({error:true,message:`Whopss, ${req.originalUrl} was not found 😔 `})
})

module.exports = router