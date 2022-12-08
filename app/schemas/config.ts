import { z } from "@/deps.ts";

import EnvNames from "@/constants/EnvVars.ts";

function getErrorMessage(environmentVariableName: EnvNames) {
  return {
    message: `Missing ${environmentVariableName} environment variable.`,
  };
}

export const ConfigSchema = z.object({
  base_url: z.string().min(
    1,
    getErrorMessage(EnvNames.BASE_URL),
  ),
  environment: z.string().min(
    1,
    getErrorMessage(EnvNames.DENO_ENV),
  ),
  proxiedApis: z.object({
    nasa: z.object({
      endpoint: z.string().url(),
      apiKey: z.string()
    }),
  }),
});

export type Config = z.infer<typeof ConfigSchema>;
