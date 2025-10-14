import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { templatesTable } from "../models/Template";
import { drizzle } from "drizzle-orm/d1";
import { eq } from "drizzle-orm"
import type { Env } from "../../..";

const RequestSchema = z.object({
  id: z.string().uuid().optional(),
  content: z.union([
    z.string(),
    z.record(z.unknown()),
    z.array(z.unknown()),
  ]),
});

export class CreateTemplateApi extends OpenAPIRoute {
  schema = {
    tags: ["templates"],
    summary: "Create a new template",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object" as const,
            properties: {
              id: { type: "string" as const },
              content: {
                oneOf: [
                  { type: "string" as const },
                  { type: "object" as const },
                  { type: "array" as const },
                ],
              },
            },
          },
        },
      },
    },
    responses: {
      "201": { description: "Template created successfully" },
      "400": { description: "Bad request" },
      "500": { description: "Internal server error" },
    },
  };

  async handle(request: Request, env: Env) {
    const db = drizzle(env.DB);

    try {
      const body = await request.json();
      const { id, content } = RequestSchema.parse(body);

      // Сериализация
      const contentForDb =
        typeof content === "string" ? content : JSON.stringify(content);

      const templateId = id ?? crypto.randomUUID();

      console.log("🧱 Insert data:", { id: templateId, content: contentForDb });

      // Вставка без .returning()
      await db.insert(templatesTable).values({
        id: templateId,
        content: contentForDb,
      });

      // После вставки — достаём обратно для ответа
      const [newTemplate] = await db
        .select()
        .from(templatesTable)
        .where(eq(templatesTable.id, templateId))

      if (!newTemplate) {
        throw new Error("Failed to fetch newly inserted template");
      }

      console.log("✅ Template created:", newTemplate);

      return Response.json(newTemplate, { status: 201 });
    } catch (error) {
      console.error("❌ Error creating template:", error);

      if (error instanceof z.ZodError) {
        return Response.json(
          { error: "Validation failed", details: error.errors },
          { status: 400 },
        );
      }

      return Response.json(
        { error: "Internal server error", details: String(error) },
        { status: 500 },
      );
    }
  }
}
