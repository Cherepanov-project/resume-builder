import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { z } from "zod";
import type { TTemplate } from "../../../types";

export const templatesTable = sqliteTable("templates_table", {
  id: text().primaryKey().$defaultFn(() => crypto.randomUUID()),
  content: text().notNull(),
});

export const templatesSchema = z.object({
  id: z.number(),
  content: z.string(),
}) satisfies z.ZodType<TTemplate>;
