import {createPool} from "mysql2/promise"
export const conexion = createPool({
    host:"instancia-db-iot.cd0oo2a6kedn.us-east-1.rds.amazonaws.com",
    user:"admin",
    password:"Admin12345#!",
    database:"db_iot",
    port:"3306"
})