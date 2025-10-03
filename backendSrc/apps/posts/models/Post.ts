import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { z } from "zod";
import type { TPost } from "../../../types";

export const postsTable = sqliteTable("posts_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: text().notNull(),
});

export const postsSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
}) satisfies z.ZodType<TPost>;
