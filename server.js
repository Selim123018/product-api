// index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const USERNAME = 856832;
const PASSWORD = '426925c5-50dc-4c60-99bb-2add13daace1';

app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
    try {
        console.log('Request query:', req.query);

        const token = Buffer.from(`${USERNAME}:${PASSWORD}`, 'utf-8').toString('base64');
        const response = await axios.get('https://api.ssactivewear.com/v2/products', {
            params: req.query,
            headers: {
                'Authorization': `Basic ${token}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('API response data:', response.data);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
            res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            console.error('Error request:', error.request);
            res.status(500).json({ error: 'No response received from API' });
        } else {
            console.error('Error message:', error.message);
            res.status(500).json({ error: error.message });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
