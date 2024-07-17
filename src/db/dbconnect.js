import pg from "pg";
import { DB_NAME } from "../constants.js";


export const connectDB = async () => {
  try {
    const connectionString = `${process.env.POSTGRES_URL}/${DB_NAME}`;
    const {Pool, Client} = pg;
    const pool = new Pool({
        connectionString
      })
      console.log(pool);
      await pool.query('SELECT NOW()');
      await pool.end();
    const client = new Client({
        connectionString
    });
    await client.connect();
    await client.end();
    console.log(`\n Connected to database !!! DB Host: ${client.connectionParameters.host} \n`);
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};