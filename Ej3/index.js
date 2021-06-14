import express from 'express';
import path from 'path';
import cors from 'cors';

const __dirname = path.resolve();
const app = express();

// Middlewares

app.use(express.json());

app.use((req,res,next) => {
    res.set({
        'Cache-Control': 'no-cache'
    });
    next();
});

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST"],
    preflightContinue: true
}));

// Configuración rutas

app.post('/date', (req, res) => {
    const date = new Date();
    res.json({
        username: req.body.username,
        date: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    });
});

// Iniciación servidor

app.listen(3000, () => {
    console.log('Server up on port 3000');
})