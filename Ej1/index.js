import express from 'express';

const app = express();

app.get('/user', (req, res) => {
    res.json({
        name: 'User1',
        age: 35,
        url: req.protocol + "://" + req.get('host') + req.originalUrl,
    });
});

app.listen(3000, () => {
    console.log('Listen en puerto 3000');
});

