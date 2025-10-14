import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { templatesTable } from "../models/Template";
import { drizzle } from "drizzle-orm/d1";
import type { Env } from "../../..";

const RequestSchema = z.object({
  id: z.string().uuid().optional(),
  content: z.union([z.string(), z.record(z.unknown()), z.array(z.unknown())]),
});

export class CreateTemplateApi extends OpenAPIRoute {
  schema = {
    security: [
      {
        BearerAuth: [],
      },
    ],
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

      const contentForDb = JSON.stringify(content)
        .replace(/<script>/g, "&lt;script&gt;")
        .replace(/<\/script>/g, "&lt;/script&gt;");

      const templateId = id ?? crypto.randomUUID();

      await db.insert(templatesTable).values({
        id: templateId,
        content: contentForDb,
      });

      const result = await env.DB.prepare("SELECT * FROM templates_table WHERE id = ?")
        .bind(templateId)
        .first();

      if (!result) {
        throw new Error("Failed to fetch inserted template");
      }

      return Response.json(result, { status: 201 });
    } catch (error) {
      console.error(error);

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
