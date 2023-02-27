// importing relevant module;
import {Pool } from 'pg';

// import config
import { dbConfig } from '../config/config';

// import types
import { dbConfigTypes } from '../types/db.types';

// create connection
export const db = new Pool(
 process.env.NODE_ENV === "production" ? 
  {
     connectionString : process.env.DATABASE_URL,
     ssl : {
        rejectUnauthorized : false
     }
  }
 :
   {
   user : dbConfig.user,
   host: dbConfig.host,
   database : dbConfig.database,
   password : dbConfig.password,
   port : dbConfig.port,
   } as dbConfigTypes 
);

