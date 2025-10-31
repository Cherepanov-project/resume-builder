export function withCORS(handler: (...args: any[]) => Promise<Response> | Response) {
  return async function (...args: any[]) {
    const response: Response = await handler(...args);
    const headers = new Headers(response.headers);

    const allowedPatterns = [
      /^https?:\/\/localhost(:\d+)?$/,
      /^https:\/\/.*\.vercel\.app$/,
      /^https:\/\/.*\.workers\.dev$/
    ];

    
    const [request] = args;
    const origin = request?.headers.get("Origin");
    const isAllowed = origin && allowedPatterns.some((regex) => regex.test(origin));
    if (isAllowed) {
      headers.set("Access-Control-Allow-Origin", origin);
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