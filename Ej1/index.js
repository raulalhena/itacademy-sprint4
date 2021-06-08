import fs from 'fs';
import express from 'express';

const app = express();
const file = fs.readFileSync('./user.json');
const userInfo = JSON.parse(file);

app.get('/user', (req, res) => {
    res.json({
        name: userInfo.name,
        age: userInfo.age,
        url: req.protocol + "://" + req.get('host') + req.originalUrl,
    });
});

app.listen(3000, () => {
    console.log("Server on port 3000");
});

