import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { templatesTable } from "../models/Template";
import { drizzle } from "drizzle-orm/d1";
import type { Env } from "../../..";

const RequestSchema = z.object({
  id: z.string().uuid().optional(),
  content: z.record(z.unknown()).or(z.array(z.unknown())).or(z.string()),
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
              content: { type: "object" as const },
            },
          },
        },
      },
    },
    responses: {
      "201": {
        description: "Template created successfully",
      },
      "400": {
        description: "Bad request",
      },
      "500": {
        description: "Internal server error",
      },
    },
  };

  async handle(request: Request, env: Env) {
    const db = drizzle(env.DB);

    try {
      const body = await request.json();
      const { id, content } = RequestSchema.parse(body);

      const contentForDb = typeof content === "string" ? content : JSON.stringify(content);

      const insertData: { content: string; id?: string } = {
        content: contentForDb,
      };

      if (id !== undefined) insertData.id = id;

      const result = await db.insert(templatesTable).values(insertData).returning();
      const newTemplate = result[0];

      const responseSchema = z.object({
        id: z.string(), 
        content: z.string(),
      });

      return Response.json(responseSchema.parse(newTemplate), {
        status: 201,
      });
    } catch (error) {
      console.error("Error creating template:", error);

      if (error instanceof z.ZodError) {
        return Response.json(
          {
            error: "Validation failed",
            details: error.errors,
          },
          { status: 400 },
        );
      }

      return Response.json(
        {
          error: "Internal server error",
        },
        { status: 500 },
      );
    }
  }
}