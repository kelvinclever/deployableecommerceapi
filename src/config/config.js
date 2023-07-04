import dotenv from "dotenv"
import assert from "assert"
dotenv.config() 
 
const {USER,PORT,PASSWORD,SERVER,DATABASE} = process.env
assert (PORT,'PORT IS REQUIRED')

export const dbConfig = {
  
   PORT:PORT,
   sql:{
    user: USER,
    password:PASSWORD,
    server:SERVER,
    database:DATABASE,
    options:{
        encrypt:true,
        trustServerCertificate:false,
    }
}

}