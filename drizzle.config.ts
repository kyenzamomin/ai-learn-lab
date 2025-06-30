import { defineConfig } from "drizzle-kit";
import { BaseEnvironment } from "./configs/BaseEnvironment";

const env = new BaseEnvironment();

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./schema/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://courses_owner:npg_1IBLrnAOhPG7@ep-twilight-salad-a81snx5a-pooler.eastus2.azure.neon.tech/courses?sslmode=require'
  },
});
