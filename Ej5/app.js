import express from 'express';
import sequelize from './dbManager.js';

const app = express();


// DEFINICION DE RUTAS

app.get('/players', (req, res) => {
    res.send("Working get");
});

app.get('/players/:id/games', (req, res) => {
    res.send("Working get id: " + req.params.id);
});

app.get('/players/ranking', (req, res) => {
    res.send("Working get");
});

app.get('/players/ranking/loser', (req, res) => {
    res.send("Working get");
});

app.get('/players/ranking/winner', (req, res) => {
    res.send("Working get");
});

app.post('/players', (req, res) => {
    res.send("Working post");
});

app.post('/players/:id/games', (req, res) => {
    res.send("Working post id: " + req.params.id);
});

app.put('/players', (req, res) => {
    res.send("Working put");
});

app.delete('/players/:id/games', (req, res) => {
    res.send("Working delete id: " + req.params.id);
});

// INICIACION DE SERVER

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})