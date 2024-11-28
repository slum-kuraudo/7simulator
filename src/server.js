const express = require('express');
const axios = require('axios');
const cors = require('cors');  // CORSミドルウェアの追加

const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:8081',  // 特定のオリジンを指定
    credentials: true  // クレデンシャルを許可
};
app.use(cors(corsOptions));  // CORSを有効にする

app.get('/proxy', async (req, res) => {
    try {
        const janCode = req.query.jan_code;
        const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid={}&jan_code=${janCode}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Proxy server is running at http://localhost:${port}`);
});
