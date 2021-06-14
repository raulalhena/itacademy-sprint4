/*
** Ej2 Nivel 1. Info de usuario y subida de archivos de tipo imagen.
*/


import fs from 'fs';
import path from 'path';
import express from 'express';
import multer from 'multer';

const __dirname = path.resolve();
const app = express();
const file = fs.readFileSync('./user.json');
const userInfo = JSON.parse(file);
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});
const upload = multer({ 
    fileFilter: function(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
            return cb("Error: Sólo se permiten imagenes!");
        }
        cb(null,true);
    },
    storage: storage
});

app.get('/user', (req, res) => {
    res.json({
        name: userInfo.name,
        age: userInfo.age,
        url: req.protocol + "://" + req.get('host') + req.originalUrl,
    });
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.send("Se ha subido correctamente.");
});

app.listen(3000, () => {
    console.log("Server on port 3000");
});