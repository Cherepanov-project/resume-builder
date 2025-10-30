export function withCORS(handler: (...args: any[]) => Promise<Response> | Response) {
  return async function (...args: any[]) {
    const response: Response = await handler(...args);
    const headers = new Headers(response.headers);

    const allowedOrigins = [
      "http://localhost:5173",
      "https://resume-builder-dev.paulenter143.workers.dev",
      "https://resume-builder.paulenter143.workers.dev"
    ];

    const [request] = args;
    const origin = request?.headers.get("Origin");
    if (origin && allowedOrigins.includes(origin)) {
      headers.set("Access-Control-Allow-Origin", origin);
    } else {
      headers.set("Access-Control-Allow-Origin", allowedOrigins[0]);
    }


    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (request && request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  };
}