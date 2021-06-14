import express from 'express';
import basicAuth from 'basic-auth';

const app = express();

app.use((req, res, next) => {
    
    next();
});

function noAuth(req) {
    return req.auth ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected') : 'No credentials provided';
}

app.get('/', (req, res) =>{
    res.send('Hey, acceso correcto!');
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});