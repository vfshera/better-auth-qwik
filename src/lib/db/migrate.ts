import { db } from ".";
import config from "$/drizzle.config";
import "dotenv/config";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import env from "~/env";

if (!env.DB_MIGRATING) {
  throw new Error('You must set DB_MIGRATING to "true" when running migrations');
}

migrate(db, {
  migrationsFolder: config.out || "./drizzle",
});