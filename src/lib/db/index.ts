import env from "~/env";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/postgres-js";

const db = drizzle(env.DATABASE_URL, { schema });

export { db, schema };
