import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import * as functions from 'firebase-functions';
import helmet from 'helmet';
import { getFileURL } from './services/getFileURL.js';
import { getItems } from './services/getItems.js';
import { verifyCode } from './services/verifyCode.js';

const app = express();

// Middleware
app.use(helmet());
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'http://localhost:5173',
            'https://kiowsky.web.app',
            'https://kiowsky-kds.web.app/',
            'https://kiowsky-kds.firebaseapp.com/',
            'https://kiowsky.firebaseapp.com',
            /^https:\/\/kiowsky--[a-zA-Z0-9-]+\.web\.app$/,
        ],
    })
);
app.use(express.json());

// Routes
app.get('/items/:kioskId', async (req, res) => {
    try {
        const items = await getItems(req.params.kioskId);

        if (!items) {
            return res.status(404).json({ error: 'Items not found' });
        }

        return res.json(items);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/file-url', async (req, res) => {
    const { url } = req.query;

    if (typeof url !== 'string') {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        const fileURL = await getFileURL(url);

        if (!fileURL) {
            return res.status(404).json({ error: 'File URL not found' });
        }

        return res.json({ fileURL });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/verify-code', async (req, res) => {
    const { kioskId, code } = req.body;

    if (!kioskId || !code) {
        return res.status(400).json({ error: 'kioskId and code are required' });
    }

    try {
        const isValid = await verifyCode(kioskId, code);

        return res.json({ isValid });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

const api = functions.region('australia-southeast1').https.onRequest(app);

if (process.env.NODE_ENV === 'development') {
    const PORT = 5001;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export { api, app };
