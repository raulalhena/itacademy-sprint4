import express from 'express';

const app = express();

app.use((req, res, next) => {
      
    const auth = {
        login: 'user1', 
        password: 'pass1'
    };
      
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');
    
    if (login && password && login === auth.login && password === auth.password) {
        return next();
    }
    
    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Requiere autenticación.');
      
});

app.get('/', (req, res) =>{
    res.send('Acceso permitido!');
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});