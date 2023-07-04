import dotenv from "dotenv"
dotenv.config() 
 
const {USER,PASSWORD,SERVER,DATABASE} = process.env


export const dbConfig = {
  
   PORT:PORT,
    user: USER,
    password:PASSWORD,
    server:SERVER,
    database:DATABASE,
    options:{
        encrypt:true,
        trustServerCertificate:false,
    }

}