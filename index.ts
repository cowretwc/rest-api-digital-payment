/** Import Module */
import * as express from 'express'
import * as morgan from 'morgan'
import * as helmet from 'helmet'
import * as chalk from 'chalk'
import * as dotenv from 'dotenv'
const RouterApi = require('./router/api')
/** Load Env */
dotenv.config()
/** Define Express APP */
const app: express.Application = express()
/** Use Middleware */
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(morgan('dev'))
app.use('/api/v1',RouterApi)
/** Define app HOST and PORT */
const APP_HOST:string = process.env.APP_HOST || 'localhost',APP_PORT:number = +process.env.APP_PORT||8000

/** Start Server */
app.listen(APP_PORT,APP_HOST,()=>{
    console.log(`[*] ${chalk.green(`🚀 was launched on`)} : ${chalk.yellow(`http://${APP_HOST}:${APP_PORT}`)}`)
})