import 'dotenv/config';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        //	vitetsConfigPaths(), env()
    ],
    // define: {
    //     'process.env': process.env,
    // },
});
