import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { templatesSchema, templatesTable } from "../models/Template";
import { drizzle } from "drizzle-orm/d1";
import { eq } from 'drizzle-orm';
import type { Env } from "../../..";

const UPDATE_RESPONSE_SCHEMA = templatesSchema;

export class UpdateTemplateApi extends OpenAPIRoute {
  schema = {
    request: {
      params: z.object({ id: z.string() }),
      body: {
        required: true,
        content: {
          "application/json": { schema: z.object({ content: z.string() }) },
        },
      },
    },
    responses: {
      200: {
        description: "Updated successfully",
        content: {
          "application/json": {
            schema: z.object({
              id: z.string(),
              content: z.string(),
            }),
          },
        },
      },
    },
  };

  async handle(_request: Request, env: Env) {
    const db = drizzle(env.DB);
    const { params, body } = await this.getValidatedData();
    const { id } = params;
    const { content } = body;

    await db
      .update(templatesTable)
      .set({ content })
      .where(eq(templatesTable.id, id));

    return Response.json({ id, content });
  }
}