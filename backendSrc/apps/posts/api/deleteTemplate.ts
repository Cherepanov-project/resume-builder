import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { templatesSchema, templatesTable } from "../models/Template";
import { drizzle } from "drizzle-orm/d1";
import { eq } from 'drizzle-orm';
import type { Env } from "../../..";
import { ExecutionContext } from "@cloudflare/workers-types";

export class DeleteTemplateApi extends OpenAPIRoute {
  schema = {
    request: {
      params: z.object({
        id: z.number(),
      }),
    },
    responses: {
      200: {
        description: "Success",
        content: {
          "application/json": {
            schema: z.object({ success: z.boolean() }),
          },
        },
      },
    },
  };

  async handle(_request: Request, env: Env, _context: ExecutionContext) {
    if (_request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    const db = drizzle(env.DB);
    const { params } = await this.getValidatedData();
    const { id } = params;

    await db.delete(templatesTable).where(eq(templatesTable.id, id));
    return new Response(JSON.stringify({ success: true }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
}