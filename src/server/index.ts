import cors from 'cors';
import express from 'express';
import * as functions from 'firebase-functions';
import helmet from 'helmet';
import ViteExpress from 'vite-express';
import { getFileURL } from './firebase/getFileURL.js';
import { getItems } from './firebase/getItems.js';
import { verifyCode } from './firebase/verifyCode.js';

const app = express();
const api = functions.https.onRequest(app);

// Middleware
app.use(helmet());
app.use(
    cors({
        origin: [
            'http://localhost:5173',
            'https://kiowsky.firebaseapp.com/',
            'https://kiowsky.web.app/',
        ],
    })
);
app.use(express.json());

// Routes
app.get('/api/items/:kioskId', async (req, res) => {
    try {
        const items = await getItems(req.params.kioskId);
        if (!items) {
            return res.status(404).json({ error: 'Items not found' });
        }
        res.json(items);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/file-url', async (req, res) => {
    const { url } = req.query;
    if (typeof url !== 'string') {
        return res.status(400).json({ error: 'URL parameter is required' });
    }
    try {
        const fileURL = await getFileURL(url);
        if (!fileURL) {
            return res.status(404).json({ error: 'File URL not found' });
        }
        res.json({ fileURL });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/verify-code', async (req, res) => {
    const { kioskId, code } = req.body;
    if (!kioskId || !code) {
        return res.status(400).json({ error: 'kioskId and code are required' });
    }
    try {
        const isValid = await verifyCode(kioskId, code);
        res.json({ isValid });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

if (process.env.NODE_ENV === 'development') {
    ViteExpress.config({ mode: 'development' });
    ViteExpress.listen(app, 3000, () =>
        console.log('Server is listening on port 3000...')
    );
}

export { api, app };
