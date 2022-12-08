import { HandlerContext } from "$fresh/server.ts";
import config from '@/utils/config.ts';

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  try {
    const resp = await fetch(`${config.proxiedApis.nasa.endpoint}/planetary/apod?api_key=${config.proxiedApis.nasa.apiKey}`);
    return Response.json(await resp.json());
  } catch (error) {
    return Response.json(
      {
        message: error.message || "Unknown Error",
      },
      {
        status: error.status || 500,
      }
    );
  }
};