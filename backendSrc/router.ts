import { Router } from 'itty-router'
import { fromIttyRouter } from 'chanfana'

const router_ = Router()
router_.options("*", (request: Request) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://resume-builder-dev.paulenter143.workers.dev",
  ];
  const origin = request.headers.get("Origin");
  const headers = {
    "Access-Control-Allow-Origin": (origin && allowedOrigins.includes(origin)) ? origin : allowedOrigins[0],
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  return new Response(null, { status: 204, headers });
});
export const router = fromIttyRouter(router_)
router.registry.registerComponent('securitySchemes', 'BearerAuth', {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT'
});


export type RouterType = typeof router

