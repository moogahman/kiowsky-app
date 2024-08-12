"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
var env_core_1 = require("@t3-oss/env-core");
var zod_1 = require("zod");
exports.env = (0, env_core_1.createEnv)({
    server: {
        // Test
        HELLO: zod_1.z.string().regex(/\bdevelopment\b/),
        FIREBASE_API_KEY: zod_1.z.string(),
        FIREBASE_AUTH_DOMAIN: zod_1.z.string(),
        FIREBASE_PROJECT_ID: zod_1.z.string(),
        FIREBASE_STORAGE_BUCKET: zod_1.z.string(),
        FIREBASE_MESSAGING_SENDER_ID: zod_1.z.string(),
        FIREBASE_APP_ID: zod_1.z.string(),
        FIREBASE_MEASUREMENT_ID: zod_1.z.string(),
        FIREBASE_DATABASE_URL: zod_1.z.string().url(),
    },
    /**
     * What object holds the environment variables at runtime. This is usually
     * `process.env` or `import.meta.env`.
     */
    runtimeEnv: process.env,
    /**
     * By default, this library will feed the environment variables directly to
     * the Zod validator.
     *
     * This means that if you have an empty string for a value that is supposed
     * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
     * it as a type mismatch violation. Additionally, if you have an empty string
     * for a value that is supposed to be a string with a default value (e.g.
     * `DOMAIN=` in an ".env" file), the default value will never be applied.
     *
     * In order to solve these issues, we recommend that all new projects
     * explicitly specify this option as true.
     */
    emptyStringAsUndefined: true,
});
