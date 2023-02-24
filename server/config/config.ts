// import relevant module
import dotenv from 'dotenv';

//import relevant types
import { defaultConfigTypes} from '../types/config.types';
import { dbConfigTypes } from '../types/db.types';

// using .env
dotenv.config();

// defaultConfig object- this contains any config strings || numbers;
export const defaultConfig:defaultConfigTypes = {
    PORT : Number(process.env.PORT),
    TOKEN : process.env.TOKEN_ID,
    ADMIN : process.env.ADMIN_ID
}

  // default config for db connection
  export const dbConfig : dbConfigTypes = {
    user : process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port : Number(process.env.port)
  }
