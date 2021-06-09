import express from 'express';
import basicAuth from 'express-basic-auth';

const app = express();

app.use(basicAuth({
    users: {
        'user1': 'pass1'
    },
    challenge: true
}));

app.get('/', (req, res) =>{
    res.send("Hey people!");
});


app.listen(3000, () => {
    console.log("Server listening on port 3000");
});