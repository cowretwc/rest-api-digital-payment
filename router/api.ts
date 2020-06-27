import * as express from 'express'

const router: express.Router = express.Router()







router.use((req,res)=>{
    res.status(404).json({error:true,message:`Whopss, ${req.originalUrl} was not found 😔 `})
})

module.exports = router