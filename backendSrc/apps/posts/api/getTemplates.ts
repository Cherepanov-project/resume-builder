import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { templatesSchema, templatesTable } from "../models/Template";
import { drizzle } from "drizzle-orm/d1";
import type { TTemplatesResponse } from "../../../types";
import type { Env } from "../../..";

const RESPONSE_SCHEMA = z.array(templatesSchema) satisfies z.ZodType<TTemplatesResponse>;

export class GetTemplatesApi extends OpenAPIRoute {
  schema = {
    // security: [
    //   {
    //     BearerAuth: [],
    //   },
    // ],
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: RESPONSE_SCHEMA,
          },
        },
      },
    },
  };

  async handle(_request: Request, env: Env) {
    const db = drizzle(env.DB);
    const templates = await db.select().from(templatesTable);
    const responseSchema = z.array(
      z.object({
        id: z.string(),
        content: z.string(),
      }),
    );
    return Response.json(responseSchema.parse(templates));
  }
}
