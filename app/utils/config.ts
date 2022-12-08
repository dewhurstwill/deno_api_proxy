import * as mod from "dotenv";

import EnvNames from "@/constants/envVars.ts";

if (Deno.env.get(EnvNames.DENO_ENV) !== "production") {
  await mod.config({
    export: true,
  });
}

import { Config, ConfigSchema } from "@/schemas/config.ts";

const envConfig: Config = {
  base_url: Deno.env.get(EnvNames.BASE_URL) || "http://localhost:8000",
  environment: Deno.env.get(EnvNames.DENO_ENV) || "",
  proxiedApis: {
    nasa: {
      endpoint: Deno.env.get(EnvNames.NASA_API_ENDPOINT) || '',
      apiKey: Deno.env.get(EnvNames.NASA_API_KEY) || ''
    }
  }
};

const config = ConfigSchema.parse(envConfig);

export default config;