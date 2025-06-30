import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { BaseEnvironment } from "./BaseEnvironment";

const env = new BaseEnvironment();

const sql = neon('postgresql://courses_owner:npg_1IBLrnAOhPG7@ep-twilight-salad-a81snx5a-pooler.eastus2.azure.neon.tech/courses?sslmode=require'
  );
export const db = drizzle(sql);
