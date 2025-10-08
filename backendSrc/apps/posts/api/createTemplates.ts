import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { templatesSchema, templatesTable } from "../models/Template";
import { drizzle } from "drizzle-orm/d1";
import type { TTemplate } from "../../../types";
import type { Env } from "../../..";

const RequestSchema = z.object({
  id: z.number().optional(),
  content: z.string().min(1, "Content is required"),
});

export class CreateTemplateApi extends OpenAPIRoute {
  schema = {
    tags: ["templates"],
    summary: "Create a new template",
    responses: {
      201: {
        description: "Template created successfully",
      },
      400: {
        description: "Bad request",
      },
    },
  };

  async handle(request: Request, env: Env) {
    const db = drizzle(env.DB);
    const body = await request.json();
    const { id, content } = RequestSchema.parse(body);
    const insertData: { content: string; id?: number } = { content };
    if (id !== undefined) {
      insertData.id = id;
    }

    const result = await db.insert(templatesTable).values(insertData).returning();
    const newTemplate: TTemplate = result[0];
    return Response.json(templatesSchema.parse(newTemplate), {
      status: 201,
    });
  }
}