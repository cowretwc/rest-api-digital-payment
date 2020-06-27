import {Sequelize,Model,DataType} from 'sequelize'
import * as chalk from 'chalk'
import * as dotenv from 'dotenv'
dotenv.config()
// get data

const sequelize = new Sequelize({
    host:process.env.DB_HOST||'localhost',
    port:+process.env.DB_PORT||54321,
    username:process.env.DB_USER||'postgres',
    password:process.env.DB_PASS||'postgress',
    database:process.env.DB_DATABASE||'db_database',
    dialect:'postgres',
    logging:false,
})

async function testConnection(sequelize:Sequelize){
    try{
        await sequelize.authenticate()
        console.log(`[*] ${chalk.green(`Your database look success configurated.`)}`)
    }catch(err){
        console.log(`[*] ${chalk.red(`😞 Your database was Error:`)} ${chalk.yellow(err)}`)
        process.exit()
    }
}

export { sequelize , testConnection }