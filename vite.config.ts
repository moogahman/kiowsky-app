import 'dotenv/config';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import env from 'vite-plugin-env-compatible';
import vitetsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), vitetsConfigPaths(), env()],
    define: {
        'process.env': process.env,
    },
});
